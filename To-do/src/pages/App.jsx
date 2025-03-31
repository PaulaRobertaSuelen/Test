import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Footer,
  CardList,
  Card,
  NewTaskForm,
  FinishedTasks,
} from "../components";
import styles from "./styles.module.css";
import { IoIosHeart } from "react-icons/io";
import api from "../config/Api";

export default function App() {
  const [list, setList] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [phrase, setPhrase] = React.useState("");

  React.useEffect(() => {
    function loadChuckNorrisPhrase() {
      api
        .get()
        .then(({ data }) => {
          setPhrase(data.value);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadChuckNorrisPhrase();
  }, []);

  React.useEffect(() => {
    function loadList() {
      const listStorage = localStorage.getItem("list");
      if (listStorage) {
        setList(JSON.parse(listStorage));
      }
    }
    loadList();
  }, []);

  React.useEffect(() => {
    function loadCount() {
      const countStorage = localStorage.getItem("count");
      if (countStorage) {
        setCount(JSON.parse(countStorage));
      }
    }
    loadCount();
  }, []);

  function handleRemove(i) {
    setList(list.filter((_, index) => index !== i));
  }

  function handleRemove(i) {
    const newList = list.filter((_, index) => index !== i);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  }

  return (
    <Container>
      <Title>
        <span className="bold">To</span>
        <span className="light">day</span>
      </Title>
      <SubTitle>
        <p id="paragrafo">
          Wake up, go ohead, do the thing not tomorrow, do{" "}
          <span className="bold">To</span>
          <span className="light">day</span>.
        </p>
      </SubTitle>
      <div className={styles.grid}>
        <CardList>
          <h2>To do</h2>
          {!list.length ? (
            <p>Nenhum item na lista</p>
          ) : (
            list.map((item, index) => (
              <Card
                key={index}
                data={item}
                onClickToRemove={() => {
                  handleRemove(index);
                  setCount(count + 1);
                  localStorage.setItem("count", JSON.stringify(count + 1));
                }}
              />
            ))
          )}
        </CardList>
        <FinishedTasks counter={count} />
        <NewTaskForm
          onSubmit={(dado) => {
            const updatedList = [...list, dado];
            setList(updatedList);
            localStorage.setItem("list", JSON.stringify(updatedList));
          }}
        />
      </div>
      <div className={styles.chuckNorris}>
        <p>"{phrase}"</p>
        <p>By Chuck Norris</p>
      </div>
      <Footer>
        <p>
          @ Did from <IoIosHeart /> by Paula Roberta
        </p>
      </Footer>
    </Container>
  );
}