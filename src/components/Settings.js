import clsx from "clsx";
import { useHistory } from "react-router";
import Input from "./Input";
import Modal from "./Modal";
import Select from "./Select";
import classes from "./Settings.module.css";
import Switch from "./Switch";

const Item = ({ children, col }) => (
  <div className={clsx(classes.item, col && classes.column)}>{children}</div>
);

const Label = ({ children }) => (
  <label className={classes.label}>{children}</label>
);

const Button = ({ children, onClick }) => (
  <button className={classes.button} onClick={onClick}>
    {children}
  </button>
);

const Row = ({ children }) => <div className={classes.row}>{children}</div>;

export default function Settings() {
  const history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Modal>
      <div className={classes.container}>
        <div className={classes.content}>
          <h2 className={classes.title}>Timer Settings</h2>
          <div>
            <Item col>
              <Label>Time (minutes)</Label>
              <div className={classes.inputsRow}>
                <Input
                  className={classes.smallInput}
                  min={1}
                  label="Pomodoro"
                  type="number"
                />
                <Input
                  className={classes.smallInput}
                  min={1}
                  label="Short Break"
                  type="number"
                />
                <Input
                  className={classes.smallInput}
                  min={1}
                  label="Long Break"
                  type="number"
                />
              </div>
            </Item>
            <Item>
              <Label>Auto start Breaks?</Label>
              <Switch on />
            </Item>
            <Item>
              <Label>Auto start Pomodoros?</Label>
              <Switch on />
            </Item>
            <Item>
              <Label>Long Break interval</Label>
              <Input className={classes.tinyInput} min={1} type="number" />
            </Item>
            <Item>
              <Row>
                <Label>Alarm Sound</Label>
                <Select
                  value="bird"
                  items={[
                    {
                      value: "bell",
                      label: "Bell",
                    },
                    {
                      value: "bird",
                      label: "Bird",
                    },
                    {
                      value: "digital",
                      label: "Digital",
                    },
                    {
                      value: "kitchen",
                      label: "Kitchen",
                    },
                    {
                      value: "wood",
                      label: "Wood",
                    },
                  ]}
                />
              </Row>
            </Item>
            <Item>
              <Row>
                <Label>Ticking Sound</Label>
                <Select
                  value="none"
                  items={[
                    {
                      value: "none",
                      label: "None",
                    },
                    {
                      value: "fast",
                      label: "Ticking Fast",
                    },
                    {
                      value: "slow",
                      label: "Ticking Slow",
                    },
                  ]}
                />
              </Row>
            </Item>
            <Item>
              <Label>Dark Mode when running</Label>
              <Switch />
            </Item>
            <Item col>
              <Row>
                <Label>Notification</Label>
                <Select
                  value="last"
                  items={[
                    {
                      value: "every",
                      label: "Every",
                    },
                    {
                      value: "last",
                      label: "Last",
                    },
                  ]}
                />
              </Row>
              <Input label="Minute" />
            </Item>
          </div>
        </div>
        <footer className={classes.footer}>
          <Button onClick={back}>OK</Button>
        </footer>
      </div>
    </Modal>
  );
}