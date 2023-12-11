import { useSelector } from "react-redux";

export default function UserName() {
  const username = useSelector(state => state.user.username)
  if(!username) return null;

  return <div className="hidden text-sm font-semibold sm:block">{username}</div>;
}
