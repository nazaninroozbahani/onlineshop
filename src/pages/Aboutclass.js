import React from "react";

class AboutClass extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      desc: "",
      about: "",
      showMore: false,
    }
  }

  handleClick = () => {
    this.setState({
      desc: this.state.desc
    })
  };

  toggleShowMore = () => {
    console.log("numberOfClicks show more before", this.state.showMore);
    this.setState({
      showMore: !this.state.showMore
    })
    console.log("numberOfClicks show more after", this.state.showMore);
  };
  
  componentDidMount() {
    console.log("numberOfClicks show more updateee", this.state.showMore);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.showMore !== this.state.showMore)
      console.log("componentDidUpdate showMore: ", this.state.showMore);
  }

  render(){
    return (
      <>
        <div class="mb-3 w-75 p-8">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={this.state.desc}
            onChange={(e) => this.setState({desc: (e.target.value)})}
          ></textarea>
          <button type="button" class="btn btn-danger" onClick={this.handleClick}>
            ثبت
          </button>
        </div>
        <div
          className="w-50 m-8"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            width: "100%",
            WebkitLineClamp: this.state.showMore ? "none" : 3,
          }}
        >
          {this.state.about}
        </div>
        {
          <button
            type="button"
            class="btn btn-danger"
            onClick={this.toggleShowMore}
          >
            مشاهده {this.state.showMore ? "کمتر" : "بیشتر"}
          </button>
        }
      </>
    );
  }

};

export default AboutClass;
