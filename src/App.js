import { PrimaryBotton } from "./components/atoms/button/PrimaryBotton";
import { SecondaryBotton } from "./components/atoms/button/SecondaryBotton";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { SearchInput } from "./molecules/Searchinput";
import "./styles.css";
const user = {
  name: "踏襲",
  image: "https://source.unsplash.com/K0C7b6PIFWM",
  email: "info@google.com",
  phone: "12345678",
  company: {
    name: "テスト会社"
  },
  website: "google.com"
};

export default function App() {
  return (
    <HeaderOnly>
      <PrimaryBotton>テスト</PrimaryBotton>
      <SecondaryBotton>試験</SecondaryBotton>
      <br />
      <br />
      <SearchInput />

      <UserCard user={user} />
    </HeaderOnly>
  );
}
