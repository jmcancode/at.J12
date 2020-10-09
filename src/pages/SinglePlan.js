import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Button } from "reactstrap";
import HeartButton from '../components/Buttons/LikeButton';

import "../components/Buttons/LikeButton.css"


export default function SinglePlan() {

  return (
    <Container>
      <div className="shadow m-2">
        <Card className="border-0">
          <Card.Img
            variant="top"
            src="https://picsum.photos/640/360?random"
            className="rounded shadow mt-0"
          />
          <Card.Body className="mt-1">
            <div className="d-flex justify-content-between my-1">
              <Card.Title className="font-weight-bolder mb-0">
                Conquering Machismo
              </Card.Title>
              <Button
                className="p-0 rounded"
              >
                <HeartButton/>
              </Button>
            </div>
            <Card.Text className="text-muted mb-1">
              <small>Techniques for practicing mindfulness.</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="border-0 font d-flex justify-content-between p-3">
            <small>
              <a
                href="/"
                className="text-muted font-weight-bold text-decoration-none"
              >
                back to plans
              </a>
            </small>
            <small>
              <Link
                to="/plans"
                className="text-muted font-weight-bold text-decoration-none"
              >
                view full category
              </Link>
            </small>
          </Card.Footer>
          <Card.Text className="light border-0 p-4">
            Baseball ipsum dolor sit amet hit chin music, manager relief pitcher
            4-6-3. Save inside wild pitch walk off out disabled list mustard.
            On-base percentage umpire forkball season pinch runner bench loogy
            silver slugger. Cubs pitchout golden sombrero season rally stance
            hitter save. Strike zone inning dead red rally win rope shift.
            Diamond starting pitcher team manager baltimore chop dribbler cheese
            appeal.
            <br />
            <br />
            Balk wrigley second baseman starter crooked number walk off away
            moneyball 4-6-3. All-star double switch cookie wins save rope
            all-star. Breaking ball field red sox base on balls left field
            fielder's choice on-base percentage off-speed slugging. Bush league
            baseball take rhubarb on-base percentage, hit by pitch mendoza line
            astroturf. Perfect game first base second base starting pitcher
            yankees cup of coffee shift slider take. Dead ball era practice
            relay manager silver slugger knuckle bullpen sweep good eye.
            <br />
            <br />
          </Card.Text>
          <div className="container-flex d-flex justify-content-center" style={{ paddingBottom: '25%' }}>
            <Button className="rounded p-3" variant="primary" >Finish Day</Button>
            <Button className="rounded p-3 border-left-0" variant="primary" >Finish Plan</Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}
