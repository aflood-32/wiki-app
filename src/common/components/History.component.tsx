import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TRootState } from "../../store/rootReducer";
import { loadHistory } from "../../store/Layout";
import { linkNormalization } from "../utils/helpers";

const History: React.FC = () => {
  const items = useSelector((state: TRootState) => state.layout.history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);

  return (
    <ul>
      <li>Your history</li>
      {items.length > 0 &&
        items.map((item: string) => (
          <li key={item}>
            <Link to={`/article/${linkNormalization(item)}`}>{item}</Link>
          </li>
        ))}
    </ul>
  );
};

export default History;
