import React, { Component } from "react";
import HammerArea from "../components/hammer";
import { createDataList } from "../components/data/fetch";

import "../assets/body.scss";

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      user_data: [...createDataList()],
      is_moving: false,
      show_status: 0,
      scroll: ""
    };
    this.data ={}
    this.data.cntIndexCard = 0
  }

  isLike = (ans) => {

      if(ans === true)
      {

          //call function that takes in the index or card information to be shoved to the backend
          //This just stores the doctor's information until submit button is pushed

          //if

          localStorage.setItem('index_phy_card', this.data.cntIndexCard);


      }
      else
      {
          //Increment everytime the doctor is not chosen (swipe left)
          this.data.cntIndexCard = this.data.cntIndexCard + 1;
          console.log("indxNum " + this.data.cntIndexCard);
      }
    this.setState(() => {
      return {
        is_moving: true,
        scroll: ans ? "right-scroll" : "left-scroll"
      };
    });
    setTimeout(() => {
      let data = this.state.user_data;
      data.shift();
      this.setState(() => {
        return {
          user_data: createDataList(data),
          is_moving: false,
          show_status: 0,
          scroll: ""
        };
      });
    }, 500);
  };

  isShowBackToggle = () => {
    this.setState(() => {
      return {
        show_status: this.state.show_status === 2 ? 1 : 2
      };
    });
  };

  render() {
      console.log(this.state);
    return (
      <div id="main-container">
        <HammerArea
          card_data={this.state}
          func_like={(is_like) => this.isLike(is_like)}
          func_show_info={() => this.isShowBackToggle()}
        />
        <div className="button-area">
        <button
            onClick={this.isLike.bind(this, false)}
            disabled={this.state.is_moving}
        >
          <i className="fas fa-square" />
        </button>
        <button
            onClick={this.isShowBackToggle.bind(this)}
            disabled={this.state.is_moving}
        >
          <i className="fas fa-info" />
        </button>
        <button
            onClick={this.isLike.bind(this, true)}
            disabled={this.state.is_moving}
        >
          <i className="fas fa-check" />
        </button>
      </div>
  </div>
  );
  }
  }
