import { DISH_TYPE } from "./other/file";

const main = async () => {
  console.log({ food: DISH_TYPE.SALAD });

  const arrayOrPeople = [
    {
      name: "John",
      job: "Developer",
    },
    {
      name: "Jane",
      job: "Developer",
    },
    {
      name: "Jack",
      job: "Plumber",
    },
  ];

  const grouped = arrayOrPeople.reduce((acc, person) => {
    const { job } = person;
    if (!acc[job]) {
      acc[job] = [];
    }
    acc[job].push(person);
    return acc;
  }, {} as Record<string, typeof arrayOrPeople>);

  console.dir({ grouped }, { depth: null });
};

main();
