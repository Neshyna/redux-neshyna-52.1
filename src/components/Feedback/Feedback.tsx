import Button from "../Button/Button";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result,
} from "./styles";

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackActions,
  feedbackSelectors,
} from "store/redux/feedback/feedbackSlice";

function Feedback() {
  const dispatch = useAppDispatch();

  const likes = useAppSelector(feedbackSelectors.likeValue);
  const dislikes = useAppSelector(feedbackSelectors.dislikeValue);

  // const likes = useAppSelector((state) => feedbackSelectors.likeValue(state));
  // const dislikes = useAppSelector((state) => feedbackSelectors.dislikeValue(state));


  const addLike = () => {
    dispatch(feedbackActions.setLike());
  };

  const addDislike = () => {
    dispatch(feedbackActions.setDislike());
  };

  // const resetResults = () => {
  //   dispatch(feedbackActions.resetResults());
  //   
  // };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" type="button" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikes}</Result>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      {/* <Button name="RESET RESULTS" type="button" onClick={resetResults} /> */}
    </FeedbackContainer>
  )
}

export default Feedback;
