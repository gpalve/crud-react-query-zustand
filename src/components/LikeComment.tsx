import { Card } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { headerStyle } from "../styles";
import { useState } from "react";

interface Props {
  employeeId: number;
}

const LikeComment = ({ employeeId }: Props) => {
  const [like, setLike] = useState(false);
  console.log(employeeId);

  return (
    <div>
      <Card.Body>
        <Card.Link style={headerStyle} href="#" onClick={() => setLike(!like)}>
          {like ? <AiFillHeart color="red" /> : <AiOutlineHeart color="red" />}
          &nbsp;Like
        </Card.Link>
        <Card.Link style={headerStyle} href="#" onClick={() => {}}>
          <FaRegCommentAlt color="blue" /> &nbsp;Comment
        </Card.Link>
      </Card.Body>
    </div>
  );
};

export default LikeComment;
