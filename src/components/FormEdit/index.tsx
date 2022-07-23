import { type } from "os";
import { FC, useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import styles from "./FormAdd.module.css";

import React from "react";

import Select from "react-select";
import Creatable from "react-select/creatable";
import { selectors, thunks } from "../../redux/ducks";
import CreatableEditableSelect, {
  CreatableEditableSelectOption,
  CreatableEditableSelectValue,
} from "../FormAdd/CreatableEditableSelect";
import { Close, Exit } from "../../icons";

const options: CreatableEditableSelectOption[] = [];
type FormRes = {
  nameKey: string;
};

type FormModal = {
  idKeys?: number;
  setIsVisible: (item: boolean) => void;
};
const FormEdit: FC<FormModal> = ({ setIsVisible, idKeys }) => {
  const dispatch = useDispatch<AppDispatch>();
  const keysServer = useSelector(selectors.keys.SelectKeys);

  const [mass, setMass] = useState<CreatableEditableSelectOption[]>([]);

  const [valueFind, setValueFind] = useState<CreatableEditableSelectValue[]>(
    []
  );
  const [valueStop, setValueStop] = useState<CreatableEditableSelectValue[]>(
    []
  );

  const [initialMass, setInitialMass] = useState<
    CreatableEditableSelectValue[]
  >([]);

  const findItem = keysServer?.find((item) => item.id === idKeys);

  const onSubmit = ({ nameKey }: FormRes) => {
    let options: string[] = [];
    let stopword: string[] = [];
    let findword: string[] = [];
    initialMass.map((item) => options.push(item.value));
    valueFind.map((item) => findword.push(item.value));
    valueStop.map((item) => stopword.push(item.value));

    dispatch(
      thunks.keys.updateKeys({
        id: idKeys || 0,
        name: nameKey,
        stopword: stopword.join(),
        word: findword.join(),
        exclude: options.join(),
        company_id: 1,
      })
    );
    setIsVisible(false);
  };

  const telegramAkk = useSelector(selectors.telegramAkk.SelectTelegram);

  useEffect(() => {
    dispatch(thunks.telegramAkk.getListTelegram());
    for (let i = 0; i < telegramAkk?.length - 1; i++) {
      const newObj = {
        value: telegramAkk[i].name,
        label: telegramAkk[i].name,
      };
      setMass((prevState) => [...prevState, newObj]);
    }
    let newMass: CreatableEditableSelectValue[] = [];

    let stop = findItem?.stopword.split(",");
    stop?.map((value) => {
      let newObjFind = {
        value: value,
        label: value,
      };
      newMass.push(newObjFind);
    });

    setValueStop(newMass);
    newMass = [];

    let find = findItem?.word.split(",");
    find?.map((value) => {
      let newObjFind = {
        value: value,
        label: value,
      };
      newMass.push(newObjFind);
    });
    setValueFind(newMass);
    newMass = [];

    let initial = findItem?.exclude.split(",");
    initial?.map((value) => {
      let newObjFind = {
        value: value,
        label: value,
      };
      newMass.push(newObjFind);
    });
    setInitialMass(newMass);
    newMass = [];
  }, []);

  const handleChange = (options: any) => {
    setInitialMass(options);
  };

  return (
    <div className="text-black">
      <div className={styles.modal_header}>
        <p className={styles.hedder_text}>Изменение ключевика</p>
        <Close onClick={() => setIsVisible(false)} fill="black" />
      </div>
      <div className={styles.modal_body}>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            nameKey: findItem?.name,
          }}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Field name="nameKey">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Наименование
                    <input
                      {...input}
                      type="text"
                      placeholder="Наименование"
                      className={`${styles.form_input} mt-2`}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="words">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Слова, который мы ищем
                    <CreatableEditableSelect
                      options={options}
                      value={valueFind}
                      onChange={setValueFind}
                    />
                  </div>
                )}
              </Field>
              <Field name="nameKey">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Стоп слова
                    <CreatableEditableSelect
                      options={options}
                      value={valueStop}
                      onChange={setValueStop}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="nameKey">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Исключить каналы
                    <Select
                      options={mass}
                      isMulti={true}
                      value={initialMass}
                      closeMenuOnSelect={false}
                      onChange={handleChange}
                      placeholder={"Выберите каналы, которые нужно исключить"}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <button
                type="submit"
                // disabled={submitting}
                className="btn mt-4 bg-gradient-primary w-100"
                onClick={handleSubmit}
              >
                Сохранить
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default FormEdit;
