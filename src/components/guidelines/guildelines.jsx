import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              1. Team performance will be evaluated once by a panel of
                  mentors and once by a panel of judges based on mentor
                  evaluation results.
              <br /> <br />
              2. Each team should have 2-4 members. If you wish to submit
                solo, you can, but you will not be eligible for winning the
                hackathon still, you will be eligible for participation prizes.{" "}
              <br />
              <br />
              {/* 3. The last date for abstract submission is 28th August 2023. 📝🗓️{" "}
              <br />
              <br /> */}
              4. Teams can of course gain advice and support from
                  organizers, volunteers, sponsors, and others.
 <br />
              <br />
              5. All work on a project should be done at the hackathon{" "}
                  {" "}
              <br />
              <br />
              6. Teams can use an idea they had before the event.
              <br />
              <br />
              7. Teams can work on ideas that have already been done.
Hacks do not have to be “innovative”. <br />
              <br />
              8. Teams can work on ideas that have already been done.
Hacks do not have to be “innovative”. <br />
              <br />
            </div>
            <div className="guidelines-2">
              9. Teams can work on an idea that they have worked on
before (as long as they do not reuse code).
              <br />
              <br />
              10. Teams can use libraries, frameworks, or open-source code
in their projects. Working on a project before the event and
open-sourcing it for the sole purpose of using the code
during the event is against the spirit of the rules and is not
allowed.
              <br />
              <br /> 11. Adding new features to existing projects is allowed.
Judges will only consider new functionality introduced
or new features added during the hackathon in
determining the winners. <br />
              <br />
              12. Teams must stop hacking once the time is up. However,
teams are allowed to debug and make small fixes to
their programs after time is up. <br />
              <br />
              13. Projects that violate the Code of Conduct are not
allowed.

              <br /> <br />
              14. Teams can be disqualified from the competition at the
organizers
' discretion. Reasons might include but are
not limited to breaking the Competition Rules, breaking
the Code of Conduct, or other unsporting behaviour.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
