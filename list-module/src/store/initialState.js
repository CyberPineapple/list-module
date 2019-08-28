export const initialState = {
  itemsList: JSON.parse(localStorage.getItem("itemsList")) || [
    {
      fields: {
        author: {
          name: "author",
          title: "автор",
          value: "Пушкин А.С."
        },
        name: {
          name: "name",
          title: "название",
          value: "Хентай на даче"
        },
        genre: {
          name: "genre",
          title: "жанр",
          value: "Ужасы"
        },
        description: {
          name: "description",
          title: "описание",
          value: "Дантес устроил гачимучи на диване"
        }
      },
      id: 1566894285935
    },
    {
      fields: {
        author: {
          name: "author",
          title: "автор",
          value: "Есенин С.А."
        },
        name: {
          name: "name",
          title: "название",
          value: "Самогонный дурман"
        },
        genre: {
          name: "genre",
          title: "жанр",
          value: "Фэнтэзи"
        },
        description: {
          name: "description",
          title: "описание",
          value:
            "Обдышавшись самогоном, крестьяне начали войну с внеземным разумом"
        }
      },
      id: 1566894254645
    },
    {
      fields: {
        author: {
          name: "author",
          title: "автор",
          value: "Гоголь В.В"
        },
        name: {
          name: "name",
          title: "название",
          value: "Чингачкук - соленое ухо"
        },
        genre: {
          name: "genre",
          title: "жанр",
          value: "Драмма"
        },
        description: {
          name: "description",
          title: "описание",
          value: "История о том, как Чингачкук съел свое ухо"
        }
      },
      id: 156689445623285935
    },
    {
      fields: {
        author: {
          name: "author",
          title: "автор",
          value: "Пушкин А.С."
        },
        name: {
          name: "name",
          title: "название",
          value: "Стрельба в колено"
        },
        genre: {
          name: "genre",
          title: "жанр",
          value: "Комедия"
        },
        description: {
          name: "description",
          title: "описание",
          value:
            "Однажды меня вела дорога приключени, а потом мне прострелили колено"
        }
      },
      id: 15228894285935
    }
  ],
  filter: ""
};
