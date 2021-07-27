import { graphql, rest } from 'msw';

export const handlers = [
  graphql.query('Login', (req, res, ctx) => {
    const { email } = req.variables.data;
    console.log('login hit');
    return res(
      ctx.cookie(
        'jwt',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTgxMzI1NDU1MDRjMGViZGYxYzg2OSIsImVtYWlsIjoibWVAbWUuY28iLCJpYXQiOjE2MjczNjM4ODEsImV4cCI6MTYyNzk2ODY4MX0.v6Nm2rg1ZpDP-a4338G_gvHq7lruDNSfUX66SWga62g'
      ),
      ctx.data({
        login: {
          id: '609a33ae190f4c0b9cacf8b2',
          email,
          __typename: 'User',
        },
      })
    );
  }),
  graphql.query('GetUser', (req, res, ctx) => {
    const { jwt } = req.cookies;
    return res(
      ctx.data({
        getUser: {
          id: '609a33ae190f4c0b9cacf8b2',
          email: 'jon.snow@nights-watch.gov',
          __typename: 'User',
        },
      })
    );
  }),
  graphql.query('GetCharacters', (req, res, ctx) => {
    console.log('getCharacters hit');
    return res(
      ctx.data({
        getUser: {
          id: '609a33ae190f4c0b9cacf8b2',
          email: 'jon.snow@nights-watch.gov',
          __typename: 'User',
          characters: {
            characterId: 1,
            name: 'John Snow',
            race: null,
            class: null,
            level: '1',
            isCompleted: false,
            nextLink: 'choose-race',
          },
        },
      })
    );
  }),
  rest.options('http://localhost:8080/graphql', (req, res, ctx) => {
    return res(ctx.json('options intercepted'));
  }),
];
