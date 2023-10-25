import { Form } from "react-bootstrap";
import { AboutBannerCard, NewsLatterBox, ShopCategoryBox } from "../product-box";
import twitterIcon from "../../assets/twitter-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";
import printrestIcon from "../../assets/pinterest-icon.png";
import instaIcon from "../../assets/instagram-icon.png";
import youtubeIcon from "../../assets/youtube-icon.png";

function BlogSideBaar({shopByCategory}) {
  const sidebarData = [
    "Banners (333)",
    "Clothing (6)",
    "Banners (333)",
    "Banners (333)",
    "Clothing (6)",
    "Banners (333)",
    "Banners (333)",
    "Clothing (6)",
    "Banners (333)",
    "Banners (333)",
    "Clothing (6)",
    "Banners (333)",
    "Banners (333)",
    "Clothing (6)",
    "Banners (333)",
    "Banners (333)",
    "Clothing (6)",
    "Banners (333)",
  ];
  const relatedPostsData = [
    "New Product Launch: Introducing Our Latest Innovations",
    "How to Boost Your Website’s SEO and Increase Traffic",
    "10 Tips for Effective Social Media Marketing",
    "The Importance of Branding in the Digital Age",
    "Enhancing Customer Engagement with Email Marketing",
    "The Power of Visual Content in Marketing",
    "E-commerce Trends for the Future: What to Expect",
    "Content Marketing Strategies for Small Businesses",
    "The Art of Effective Storytelling in Marketing",
    "Video Marketing: Engage Your Audience with Visual Content",
    "Building a Strong Online Presence: Tips for Businesses",
    "The Impact of Influencer Marketing on Brands",
    "Effective Email Marketing Strategies for 2023",
    "Utilizing Data Analytics for Business Growth",
    "Creating Compelling Landing Pages for Conversions",
    "Navigating the World of E-commerce: Tips and Strategies",
    "The Future of Content Marketing: Trends and Predictions",
    "Customer-Centric Approach in Modern Marketing",
    "Maximizing ROI with Pay-Per-Click Advertising",
    "Effective Social Media Advertising: Best Practices",
  ];
  const cardsCount = [1,2,3,4,5]

  return (
    <div>
      {shopByCategory?<div className="py-1 ">
        <h5 className="py-1 mx-4 light-grey bb-grey mb-4">SHOP BY CATEGORY</h5>
        {cardsCount.map((i)=>{
            return <ShopCategoryBox key={i}/>
        })}
      </div>:""}
      <div className="py-1 ">
        <h5 className="py-1 mx-4 light-grey bb-grey mb-4">CATEGORIES</h5>
        {sidebarData.map((i) => {
          return <p className="py-1 mx-4 mb-1 light-grey bb-grey">{i}</p>;
        })}
      </div>
      <div className="py-1 mt-5">
        <h5 className="py-1 mx-4 light-grey bb-grey mb-4">RELATED POSTS</h5>
        {relatedPostsData.map((i) => {
          return (
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">{i}</p>
          );
        })}
      </div>
      <AboutBannerCard />
      <div className="py-1 mt-5">
        <h5 className="py-1 mx-4 light-grey bb-grey mb-4">CONNECT & FOLLOW</h5>
        <div className="social-icons px-3 mx-auto">
          <img className="p-2" src={twitterIcon} />
          <img className="p-2" src={facebookIcon} />
          <img className="p-2" src={printrestIcon} />
          <img className="p-2" src={instaIcon} />
          <img className="p-2" src={youtubeIcon} />
        </div>
      </div>
      <NewsLatterBox />
      <div className="py-3 mt-5 mx-4">
        <h5 className="py-1 light-grey bb-grey mb-4">ARCHIVES</h5>
        <Form.Select aria-label="Default select example">
          <option>select mounth</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default BlogSideBaar;
