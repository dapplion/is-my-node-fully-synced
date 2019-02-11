import React, { Component } from "react";
import Web3 from "web3";
// Boostrap loaders
import * as $ from "jquery";
import Tether from "tether";
import Popper from "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Initialize boostrap dependencies
window.jQuery = window.$ = $;
window.Tether = Tether;
window.Popper = Popper;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "https://mainnet.infura.io", blocks: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const web3 = new Web3(this.state.url);
    window.web3 = web3;
    const isListening = await web3.eth.net.isListening();
    const networkType = await web3.eth.net.getNetworkType();
    this.setState({ isListening, networkType });
    const latestBlock = await web3.eth.getBlockNumber();
    this.setState({ latestBlock });

    // Linspace
    const blockNumbers = [];
    for (let i = latestBlock; i > 0; i = i - Math.floor(latestBlock / 100)) {
      blockNumbers.push(i);
    }

    // Query all blocks at the same time
    await Promise.all(
      blockNumbers.map(async blockNumber => {
        try {
          const block = (await web3.eth.getBlock(blockNumber)) || {};
          const date = new Date(
            (block.timestamp || 1) * 1000
          ).toLocaleDateString();
          const txCount = (block.transactions || []).length;
          this.setState({
            blocks: {
              ...this.state.blocks,
              [blockNumber]: {
                success: Boolean(block.hash),
                ...(block || {}),
                date,
                txCount
              }
            }
          });
        } catch (e) {
          this.setState({
            blocks: {
              ...this.state.blocks,
              [blockNumber]: {
                success: false,
                message: e.message
              }
            }
          });
        }
      })
    );
  }

  render() {
    if (Object.keys(this.state.blocks).length)
      console.log("You can inspect the blocks in detail here: ", {
        blocks: this.state.blocks
      });
    return (
      <div className="App">
        <header className="App-header">
          <div className="mb-3">
            <h4>Is my node fully synced?</h4>
          </div>
          <form className="form-inline mb-3" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="inputUrl" className="sr-only">
                Url
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Node url"
                style={{ minWidth: "300px" }}
                value={this.state.url}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="submit"
                  value="Submit"
                >
                  Scan
                </button>
              </div>
            </div>
          </form>
          {this.state.isListening && (
            <React.Fragment>
              <p>
                Network <strong>{this.state.networkType}</strong> is listening{" "}
                {"latestBlock" in this.state
                  ? `, latest block: ${this.state.latestBlock}`
                  : ""}
              </p>

              {Object.keys(this.state.blocks).length ? (
                <div className="container">
                  <div className="row">
                    {Object.keys(this.state.blocks).map(blockNumber => {
                      const block = this.state.blocks[blockNumber];
                      return (
                        <div
                          key={blockNumber}
                          className="col"
                          style={{
                            width: "2px",
                            height: "40px",
                            padding: "0px",
                            backgroundColor: block.success ? "green" : "red"
                          }}
                          data-toggle="tooltip"
                          data-placement="top"
                          data-html="true"
                          title={`<b>Block number</b> ${blockNumber} ${
                            block.success
                              ? `<b>Hash</b> ${block.hash} <br/> <b>Date</b> ${
                                  block.date
                                } <br/> <b>TX count</b> ${block.txCount}`
                              : `Error: ${block.message}`
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </React.Fragment>
          )}
        </header>
      </div>
    );
  }
}

export default App;
