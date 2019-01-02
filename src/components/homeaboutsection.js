import React from "react";

class HomeAbout extends React.Component {

  render() {

    return (
		<div className="about_wrapper">
			<div className="outer_div">
				<div className="inner_div"><h2>GET TO KNOW ABOUT US</h2>
					<p>Find resources about your Genesis vehicle. Articles, videos, manuals and FAQs are all in one place.</p>
				</div>
				<div className="image-div"><img src="/content/dam/mygenesis/us/mygenesis/image/banner-genesis-resourses.png" /></div>
			</div>
		</div>
    )
  }
}

export default HomeAbout;