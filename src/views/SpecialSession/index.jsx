import React from "react";
import "./specialSession.css";
import EastIcon from "@mui/icons-material/East";

const SpecialSession = () => {
  return (
    <div className="specialSessionBody">
      <p className="title">Application for Special Sessions (SS) </p>
      <p className="text">
        We invite proposals for special sessions (SS) for The First
        International Conference on Optimization Techniques for Learning (ICOTL
        2023). The conference will be held in Bengaluru, India, from December 7
        to December 8, 2023. Special sessions are intended to provide a forum
        for focused discussions on new or emerging topics of interest in the
        wide range of applications of optimization techniques in models and
        training algorithms.
      </p>
      <p className="subTitle">
        Proposals should include the following information:
      </p>
      <div>
        <div className="ssPointsDiv">
          <EastIcon />
          <p> Title and acronym of the special session</p>
        </div>
        <div className="ssPointsDiv">
          <EastIcon />
          <p>
            A list of potential topics and subtopics to be covered by the
            special session
          </p>
        </div>
        <div className="ssPointsDiv">
          <EastIcon />
          <p>Motivation and objectives of the special session</p>
        </div>
        <div className="ssPointsDiv">
          <EastIcon />
          <p>
            A short biography of the special session organizer(s), including
            their affiliation, contact details, and when applicable their
            previous experiences in organizing similar events
          </p>
        </div>
      </div>
      <p className="text">
        Proposals should be submitted by email to SS chair at
        chhsieh@gm.cyut.edu.tw within the period from May 1, 2023 to June 1,
        2023. The subject line should be "ICOTL 2023 Special Session Proposal".
        ICOTL 2023 Program Committee will evaluate the Proposals based on their
        originality, significance, quality, and feasibility. The decision
        notification will be sent by June 8, 2023. Paper submission for SS
        closes with the paper submission deadline for general session, on 30th.
        July 2023. Please visit the conference website
        <a href="http://www.icotl.in/" target="_blank">
          {" "}
          www.icotl.in
        </a>{" "}
        for details.
      </p>
      <p className="subTitle">
        Special session organizer(s) will be responsible for:
      </p>
      <div>
        <div className="ssPointsDiv">
          <EastIcon />
          <p>
            {" "}
            Soliciting and reviewing submissions for their special session,
            following the same timeline and guidelines as the main conference
          </p>
        </div>
        <div className="ssPointsDiv">
          <EastIcon />
          <p>
            Present a brief introduction and summary of their special session
            at the conference
          </p>
        </div>
        <div className="ssPointsDiv">
          <EastIcon />
          <p>
            Ensuring that their special session adheres to the ethical
            standards and code of conduct of ICOTL 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialSession;
