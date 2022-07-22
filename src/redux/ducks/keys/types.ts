export type KlyuchevikiItem = {
  id: number;
  name: string;
  stopword: string;
  word: string;
  company_id: number;
  exclude: string;
};

export type KlyuchevikiRes = { count: number; data: KlyuchevikiItem[] };

export type KlyuchevikiQue = {
  name: string;
  stopword: string;
  word: string;
  exclude: string;
  company_id: number;
};

export type KlyuchevikiUpd = {
  id: number;
  name: string;
  stopword: string;
  word: string;
  exclude: string;
  company_id: number;
};

export type KlyuchevikiAnswer = {
  klyucheviki: {
    company_id: number;
    exclude: string;
    id: number;
    name: string;
    stopword: string;
    word: string;
  };
  message: string;
  status: boolean;
};
