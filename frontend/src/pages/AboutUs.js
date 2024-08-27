import React from "react";
import { Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Row>
      <h3>Our History</h3>
      <ul className="list list-unstyled">
        <li className="list-item list-item--primary">
          Flixxit aims to be a web application with the likeness and basic
          feature set of OTT platforms such as Netflix, Prime Video and
          AppleTV+. While the actual products are built up of a complex web of
          microservices and infrastructure, the objective here is to build core
          user functionality.
        </li>
        <li className="list list-unstyled">
          Feature Set :_
          <ul className="list">
            <li>
              The web-based application should provide the following feature
              set. Feel free to extend this to make the project more vibrant:
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          User Accounts :_
          <ul className="list">
            <li>
              Allow visitors to sign up and login using their e-mail IDs and
              password for simplicity.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          User profile :_
          <ul className="list">
            <li>
              Provide a user's profile showing account information, the content
              they have consumed, and suggestions based on their interest.
              Enable them to update their preferences.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          Dashboard :_
          <ul className="list">
            <li>
              Allows users to browse titles using horizontally scrollable
              carousels spread by categories, genres etc.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          Title View :_
          <ul className="list">
            <li>
              Clicking on a title leads to this section where synopsis, rating,
              and other details of a chosen title may be seen.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          Search :_
          <ul className="list">
            <li>
              Allow users to search various types of content like web series,
              movies, short films, documentaries etc. You may use a third-party
              API such as https://www.themoviedb.org/ for obtaining this data.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          Watchlist :_
          <ul className="list">
            <li>
              Allow users to add programs that they wish to watch later with
              "Autoplay" feature.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          Rating :_
          <ul className="list">
            <li>
              Allow users to rate any program in form of upvote or downvote and
              show the count.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          Video player :_
          <ul className="list">
            <li>
              Allow user an option to preview or play the selected content on
              the platform with "Skip Intro" feature. Add few videos to the app
              as content, which can be played on the video player. Add at least
              two video quality (HD, Auto).
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          Payment and subscription :_
          <ul className="list">
            <li>
              Allow users to subscribe for monthly or yearly plans for accessing
              all the features of the app. You can build the feature to the
              extent of displaying the invoice with a Pay Now button. Further
              integration with a payment gateway is not required however you may
              feel free to implement the same using a service like Stripe.
            </li>
          </ul>
        </li>
        <li className="list list-unstyled">
          About us :_
          <ul className="list">
            <li>
              Add information about the features, origin, copyrights, terms, and
              conditions and help desk details in this section.
            </li>
          </ul>
        </li>
      </ul>
    </Row>
  );
};

export default AboutUs;
