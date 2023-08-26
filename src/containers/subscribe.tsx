import { useState } from "react";
import Subscribe from "../components/subscribe";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const SubscribeContainer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (email) {
      navigate({ pathname: ROUTES.SIGNUP.path });
    }
  };
  return (
    <>
      <Subscribe>
        <Subscribe.Title>
          Ready to watch? Enter your email to create or restart your membership.
        </Subscribe.Title>
        <Subscribe.Panel>
          <Subscribe.Input
            placeholder="Email address"
            value={email}
            onChange={({ target }: any) => setEmail(target.value)}
          />
          <Subscribe.Button disabled={!email} onClick={handleSubscribe}>
            Get Started
            <HiOutlineArrowSmRight />
          </Subscribe.Button>
        </Subscribe.Panel>
      </Subscribe>
    </>
  );
};

export default SubscribeContainer;
