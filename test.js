import { sleep, group } from 'k6'
import http from 'k6/http'
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
  thresholds: {http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<400'], 
    'group_duration{group:::individualRequests}': ['avg < 800'],
    'group_duration{group:::batchRequests}': ['avg < 400'], 
     },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 5, duration: '1m' },
        { target: 10, duration: '2m' },
        { target: 0, duration: '2m' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  const vars = {}

  group('page_1 - https://coretest.eoxvantage.com/', function () {
    response = http.post(
      'https://coretest.eoxvantage.com/login',
      '{"username":"kishoredeept","password":"India@2023"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['jwt'] = jsonpath.query(response.json(), '$.jwt')[0]

    sleep(0.9)

    response = http.get('https://apicoretest.eoxvantage.com/user/me', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options('https://apicoretest.eoxvantage.com/user/me', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(1.5)

    response = http.get('https://apicoretest.eoxvantage.com/user/me/getsession', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options('https://apicoretest.eoxvantage.com/user/me/getsession', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.get('https://apicoretest.eoxvantage.com/user/me/getsession', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options('https://apicoretest.eoxvantage.com/user/me/getsession', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.get('https://apicoretest.eoxvantage.com/user/me/a+p+acc+bapp+ap', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'content-type': 'application/json',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    vars['uuid1'] = jsonpath.query(response.json(), '$.data.apps[9].uuid')[0]

    response = http.options('https://apicoretest.eoxvantage.com/user/me/a+p+acc+bapp+ap', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'GET',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(2.1)

    response = http.get('https://apicoretest.eoxvantage.com/user/me/a+bapp', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://apicoretest.eoxvantage.com/user/me/a+bapp', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options('https://apicoretest.eoxvantage.com/user/me/a+bapp', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.options('https://apicoretest.eoxvantage.com/user/me/a+bapp', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(1.1)

    response = http.get('https://apicoretest.eoxvantage.com/user/me/hasLoggedIn', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options('https://apicoretest.eoxvantage.com/user/me/hasLoggedIn', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(0.9)

    response = http.get('https://apicoretest.eoxvantage.com/announcement/a/ANNOUNCEMENT', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options(
      'https://apicoretest.eoxvantage.com/announcement/a/ANNOUNCEMENT',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get('https://apicoretest.eoxvantage.com/announcement/a/ANNOUNCEMENT', {
      headers: {
        authorization: `Bearer ${vars['jwt']}`,
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options(
      'https://apicoretest.eoxvantage.com/announcement/a/ANNOUNCEMENT',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(5.1)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/menu',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/menu',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/page/924508a6-c9a2-46a5-91e5-b65019574e4d',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['formAppId1'] = jsonpath.query(response.json(), '$.data.form[0].formAppId')[0]

    vars['index01'] = jsonpath.query(response.json(), '$.data.my_custom_field[0]')[0]

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/page/924508a6-c9a2-46a5-91e5-b65019574e4d',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1.3)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/a97d4b92-689d-4a6d-9320-b56120c8437b',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/a97d4b92-689d-4a6d-9320-b56120c8437b',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/a97d4b92-689d-4a6d-9320-b56120c8437b',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.9)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/eeb456e8-f2bc-4db5-badf-2b356c8ef3ce?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/4c7645ba-78df-4675-8632-751c1090a298?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/9a65320e-0bb8-4448-8817-33bbed27d8ec?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/eeb456e8-f2bc-4db5-badf-2b356c8ef3ce?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/4b85bb3b-00ef-45b1-bd40-ebd3d719f59b?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/6e9aa258-cac9-45b6-a459-b048a3da866a?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/4c7645ba-78df-4675-8632-751c1090a298?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/795f4e8a-1e4b-4d89-b972-f62be81dc249?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/9a65320e-0bb8-4448-8817-33bbed27d8ec?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/4b85bb3b-00ef-45b1-bd40-ebd3d719f59b?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/6e9aa258-cac9-45b6-a459-b048a3da866a?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/795f4e8a-1e4b-4d89-b972-f62be81dc249?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(0.9)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/page/2580c9cc-7e3e-44b8-a38a-3acf98a3097f',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/page/2580c9cc-7e3e-44b8-a38a-3acf98a3097f',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(4.5)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/form/d7c57a17-dd23-4bb2-93c8-57dcc2de168c',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/form/d7c57a17-dd23-4bb2-93c8-57dcc2de168c',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(0.7)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/795f4e8a-1e4b-4d89-b972-f62be81dc249?data=true&top=50&skip=0',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/795f4e8a-1e4b-4d89-b972-f62be81dc249?data=true&top=50&skip=0',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1.2)

    response = http.post(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/pipeline',
      `{"appId":"${vars['formAppId1']}","assignedToEmail":"","assignedToName":"","assignedto":"","assignedtoObj":{},"category":"","description":"","end_date":"2023-10-06T10:15:16.000Z","fileId":null,"filter":"","issue_type_it":{},"locationUser":"","mappedstatus":"","name":"","owner":"","ownerEmailId":"","ownerusername":"","priority":"","severity":"","sla":"","start_date":"2023-10-03T10:15:16.000Z","status":"Open","tags":[{}],"timezoneUser":"","uploads":[],"commands":[{"command":"getuserlist"}],"is_draft":false}`,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/pipeline',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['accountId1'] = jsonpath.query(response.json(), '$.data[5].project[0].accountId')[0]

    vars['name1'] = jsonpath.query(response.json(), '$.data[0].name')[0]

    vars['uuid2'] = jsonpath.query(response.json(), '$.data[0].uuid')[0]

    vars['manager_name1'] = jsonpath.query(response.json(), '$.data[5].manager_name')[0]

    vars['managerId1'] = jsonpath.query(response.json(), '$.data[5].managerId')[0]

    vars['uuid3'] = jsonpath.query(response.json(), '$.data[2].uuid')[0]

    vars['uuid4'] = jsonpath.query(response.json(), '$.data[3].uuid')[0]

    vars['name2'] = jsonpath.query(response.json(), '$.data[4].name')[0]

    vars['username1'] = jsonpath.query(response.json(), '$.data[4].username')[0]

    vars['uuid5'] = jsonpath.query(response.json(), '$.data[4].uuid')[0]

    vars['uuid6'] = jsonpath.query(response.json(), '$.data[5].uuid')[0]

    response = http.options(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(12.6)

    response = http.post(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/pipeline',
      `{"appId":"${vars['formAppId1']}","assignedToEmail":"iranicrispim@eoxvantage.com","assignedToName":"Irani Crispim","assignedto":"6b72f622-7488-409a-822c-081bbd31558c","assignedtoObj":{"name":"Irani Crispim","uuid":"6b72f622-7488-409a-822c-081bbd31558c","email":"iranicrispim@eoxvantage.com"},"category":"HR Requests","description":"<p>asafsaf</p>\\n","end_date":"2023-10-06T10:15:16.000Z","fileId":"","filter":[{"skip":0,"take":10000,"designation":"HR"}],"issue_type_it":"PTO","locationUser":"United States of America","mappedstatus":"Open","name":"ISMS Teams","owner":"Kishoredeep Tamuli","ownerEmailId":"kishoredeept@eoxvantage.in","ownerusername":"kishoredeept","priority":"High","severity":"High","sla":"3 business days","start_date":"2023-10-03T10:15:16.000Z","status":"Open","tags":[{}],"timezoneUser":"","uploads":[],"commands":[{"command":"fileSave","entity_name":"${vars['index01']}"},{"command":"workflow","delegate":"https://n8nnew.eoxvantage.com/prod/v1/helpdesksubmitmail"}],"is_draft":false}`,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://n8nnew.eoxvantage.com/prod/v1/helpdesksubmitmail', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(2.3)

    response = http.del(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/deletecache',
      null,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/deletecache',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'DELETE',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/page/924508a6-c9a2-46a5-91e5-b65019574e4d',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1.4)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/a97d4b92-689d-4a6d-9320-b56120c8437b',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.8)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/a97d4b92-689d-4a6d-9320-b56120c8437b',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/page/8a7f5e60-b1b7-471a-9c13-dbcfd1b5d03f',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['formAppId2'] = jsonpath.query(response.json(), '$.data.form[0].formAppId')[0]

    vars['index02'] = jsonpath.query(response.json(), '$.data.my_custom_field[0]')[0]

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/547ae973-98f2-4f77-b582-cd0e1bf48f33/page/8a7f5e60-b1b7-471a-9c13-dbcfd1b5d03f',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1.5)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/201c770f-b0e8-4435-96a4-5068461b6861',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/201c770f-b0e8-4435-96a4-5068461b6861',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1.1)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/dashboard/201c770f-b0e8-4435-96a4-5068461b6861',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.7)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/49b62111-7c2d-4d99-b1c3-0e2d05b0291e?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/680ec6c2-0e77-49d3-a11d-148b39c13515?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/6ae9d175-c6c0-427d-ab4c-84ddd30e4946?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/49b62111-7c2d-4d99-b1c3-0e2d05b0291e?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/bc0afa34-19b3-4b69-a9dd-3376082f2d59?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/a6244a63-5ce8-4acb-9775-43f1cd89544d?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/24e91acc-8b9a-4c30-9cd0-c154c563a88f?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/f22bb0c9-4e15-4c5e-9eaa-edbf1ad27b05?data=true',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/680ec6c2-0e77-49d3-a11d-148b39c13515?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/6ae9d175-c6c0-427d-ab4c-84ddd30e4946?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/bc0afa34-19b3-4b69-a9dd-3376082f2d59?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/a6244a63-5ce8-4acb-9775-43f1cd89544d?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/24e91acc-8b9a-4c30-9cd0-c154c563a88f?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/f22bb0c9-4e15-4c5e-9eaa-edbf1ad27b05?data=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(4.3)

    response = http.get(
      'https://apicoretest.eoxvantage.com/analytics/widget/f22bb0c9-4e15-4c5e-9eaa-edbf1ad27b05?data=true&top=50&skip=0',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/analytics/widget/f22bb0c9-4e15-4c5e-9eaa-edbf1ad27b05?data=true&top=50&skip=0',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(2.9)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/menu',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/menu',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(7)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/page/6313740d-2129-47fd-8eb9-381b9d91587a',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/page/6313740d-2129-47fd-8eb9-381b9d91587a',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(2.2)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/form/9f3454a8-772f-465c-bc42-43e16dff6776',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/form/9f3454a8-772f-465c-bc42-43e16dff6776',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(2)

    response = http.post(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/pipeline',
      `{"appId":"${vars['formAppId2']}","assignedToEmail":"","assignedToName":"","assigned_team":[],"assignedto":"","assignedtoObj":{},"category":"","category_PS":"","description":"","fileId":null,"filter":"","issue_type_it":{},"mappedstatus":"","mappedstatus1":"","name":"","owner":"","ownerEmailId":"","ownerusername":"","priority":"","severity":"","sla":"","start_date":"2023-10-03T10:15:56.000Z","status":"Open","tags":[{}],"uploads":[],"commands":[{"command":"getuserlist"}],"is_draft":false}`,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/pipeline',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/teams/list?filter=[{%22skip%22:0,%22take%22:10000}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/teams/list?filter=[{%22skip%22:0,%22take%22:10000}]',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(13.4)

    response = http.post(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/pipeline',
      `{"appId":"${vars['uuid1']}","assignedToEmail":"","assignedToName":"","assigned_team":[],"assignedto":"","assignedtoObj":{},"category":"IT Tickets","category_PS":"Internal","description":"","filter":[{"skip":0,"take":10000,"designation":"HR"}],"issue_type_it":"Asset allocation","mappedstatus":"","mappedstatus1":"","name":"Task observers","owner":"Kishoredeep Tamuli","ownerEmailId":"kishoredeept@eoxvantage.in","ownerusername":"kishoredeept","priority":"High","severity":"High","sla":"","start_date":"2023-10-03T10:15:56.000Z","status":"Open","tags":[{}],"uploads":[],"userlist":[{"uuid":"${vars['uuid2']}","username":"bpuranic","firstname":"Badrinath","lastname":"Puranic","name":"${vars['name1']}","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/3811b05a-0d1f-4ed6-99b4-8a3a3155036c"},{"uuid":"${vars['managerId1']}","username":"harsha","firstname":"Harsha","lastname":"Chaturvedi","name":"${vars['manager_name1']}","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/afb5f488-a4c0-11e9-b35d-0028f87be1ac"},{"uuid":"${vars['uuid3']}","username":"kishoredeept","firstname":"Kishoredeep","lastname":"Tamuli","name":"Kishoredeep Tamuli","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/c68c0a48-8a89-40d7-ad9e-43e7b5f55f0e"},{"uuid":"${vars['uuid4']}","username":"suchithra","firstname":"Suchithra","lastname":"H","name":"Suchithra H","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/afdfb1c4-a4c0-11e9-b35d-0028f87be1ac"},{"uuid":"${vars['uuid5']}","username":"${vars['username1']}","firstname":"Sudarshan ","lastname":"Venkatesan ","name":"${vars['name2']}","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/e6a2cc23-73f3-4074-9c17-3c3d80f2a8c2"},{"uuid":"${vars['uuid6']}","username":"usertest","firstname":"Test ","lastname":"User","name":"Test  User","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/c8404305-90be-4424-ad18-28ce0e5bb3d1"}],"commands":[{"command":"fileSave","entity_name":"${vars['index02']}"},{"command":"workflow","delegate":"https://n8.eoxvantage.com/prod/v1/helpdesksubmitmail","entity_name":"${vars['index02']}"}],"is_draft":false}`,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(2.1)

    response = http.del(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/deletecache',
      null,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/deletecache',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'DELETE',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(3.4)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/page/6d45b3f6-99ba-440c-86c3-f4f5fbcf1987',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/page/6d45b3f6-99ba-440c-86c3-f4f5fbcf1987',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1.3)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/file?filter=[{%22sort%22:[{%22field%22:%22date_modified%22,%22dir%22:%22desc%22}]}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/file?filter=[{%22sort%22:[{%22field%22:%22date_modified%22,%22dir%22:%22desc%22}]}]',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/file/undefined/data',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/file/undefined/data',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://coretest.eoxvantage.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(6.6)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1.3)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/form/9f3454a8-772f-465c-bc42-43e16dff6776',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1.9)

    response = http.post(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/pipeline',
      `{"appId":"${vars['formAppId2']}","assignedToEmail":"","assignedToName":"","assigned_team":[],"assignedto":"","assignedtoObj":{},"category":"","category_PS":"","description":"","fileId":null,"filter":"","issue_type_it":{},"mappedstatus":"","mappedstatus1":"","name":"","owner":"","ownerEmailId":"","ownerusername":"","priority":"","severity":"","sla":"","start_date":"2023-10-03T10:16:26.000Z","status":"Open","tags":[{}],"uploads":[],"commands":[{"command":"getuserlist"}],"is_draft":false}`,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/teams/list?filter=[{%22skip%22:0,%22take%22:10000}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/user?filter=[{%22filter%22:{%22logic%22:%22and%22,%22filters%22:[{%22field%22:%22name%22,%22operator%22:%22isnotempty%22,%22value%22:%22%22}]},%22sort%22:[{%22dir%22:%22asc%22,%22field%22:%22name%22}],%22take%22:100,%22skip%22:0}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(14.4)

    response = http.post(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/pipeline',
      `{"appId":"${vars['uuid1']}","assignedToEmail":"","assignedToName":"","assigned_team":[],"assignedto":"","assignedtoObj":{},"category":"Production Support","category_PS":"Internal","description":"","filter":[{"skip":0,"take":10000,"designation":"HR"}],"issue_type_it":"Requirement","mappedstatus":"","mappedstatus1":"","name":"Task","owner":"Kishoredeep Tamuli","ownerEmailId":"kishoredeept@eoxvantage.in","ownerusername":"kishoredeept","priority":"High","severity":"Low","sla":"2 business days","start_date":"2023-10-03T10:16:26.000Z","status":"Open","tags":[{}],"uploads":[],"userlist":[{"uuid":"${vars['uuid2']}","username":"bpuranic","firstname":"Badrinath","lastname":"Puranic","name":"${vars['name1']}","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/3811b05a-0d1f-4ed6-99b4-8a3a3155036c"},{"uuid":"${vars['managerId1']}","username":"harsha","firstname":"Harsha","lastname":"Chaturvedi","name":"${vars['manager_name1']}","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/afb5f488-a4c0-11e9-b35d-0028f87be1ac"},{"uuid":"${vars['uuid3']}","username":"kishoredeept","firstname":"Kishoredeep","lastname":"Tamuli","name":"Kishoredeep Tamuli","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/c68c0a48-8a89-40d7-ad9e-43e7b5f55f0e"},{"uuid":"${vars['uuid4']}","username":"suchithra","firstname":"Suchithra","lastname":"H","name":"Suchithra H","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/afdfb1c4-a4c0-11e9-b35d-0028f87be1ac"},{"uuid":"${vars['uuid5']}","username":"${vars['username1']}","firstname":"Sudarshan ","lastname":"Venkatesan ","name":"${vars['name2']}","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/e6a2cc23-73f3-4074-9c17-3c3d80f2a8c2"},{"uuid":"${vars['uuid6']}","username":"usertest","firstname":"Test ","lastname":"User","name":"Test  User","accountId":"${vars['accountId1']}","icon":"https://apicoretest.eoxvantage.com/user/profile/c8404305-90be-4424-ad18-28ce0e5bb3d1"}],"commands":[{"command":"fileSave","entity_name":"${vars['index02']}"},{"command":"workflow","delegate":"https://n8.eoxvantage.com/prod/v1/helpdesksubmitmail","entity_name":"${vars['index02']}"}],"is_draft":false}`,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(2.6)

    response = http.del(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/deletecache',
      null,
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/page/6d45b3f6-99ba-440c-86c3-f4f5fbcf1987',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1)

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/file?filter=[{%22sort%22:[{%22field%22:%22date_modified%22,%22dir%22:%22desc%22}]}]',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://apicoretest.eoxvantage.com/app/4e15d977-6129-45ca-b7f3-0d223a73a62e/file/undefined/data',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(4.5)

    response = http.post(
      'https://apicoretest.eoxvantage.com/user/me/updatesession',
      '{"data":"[{\\"args\\":{},\\"name\\":\\"Chat\\",\\"windows\\":[{\\"id\\":\\"ChatWindow\\",\\"maximized\\":false,\\"minimized\\":true,\\"position\\":{\\"top\\":33,\\"left\\":0},\\"dimension\\":{\\"width\\":400,\\"height\\":500}}]},{\\"args\\":{},\\"name\\":\\"Announcement\\",\\"windows\\":[{\\"id\\":\\"annoucementsWindow\\",\\"maximized\\":false,\\"minimized\\":true,\\"position\\":{\\"top\\":55,\\"left\\":0},\\"dimension\\":{\\"width\\":800,\\"height\\":450}}]},{\\"args\\":{},\\"name\\":\\"Task\\",\\"windows\\":[{\\"id\\":\\"TaskApplicationWindow\\",\\"maximized\\":true,\\"minimized\\":false,\\"position\\":{\\"top\\":100,\\"left\\":300},\\"dimension\\":{\\"width\\":400,\\"height\\":400}}]},{\\"args\\":{},\\"name\\":\\"Helpdesk\\",\\"windows\\":[{\\"id\\":\\"Helpdesk_Window\\",\\"maximized\\":true,\\"minimized\\":false,\\"position\\":{\\"top\\":38,\\"left\\":40},\\"dimension\\":{\\"width\\":900,\\"height\\":500}}]},{\\"args\\":{},\\"name\\":\\"CoreTesting\\",\\"windows\\":[{\\"id\\":\\"CoreTesting_Window\\",\\"maximized\\":true,\\"minimized\\":false,\\"position\\":{\\"top\\":38,\\"left\\":50},\\"dimension\\":{\\"width\\":900,\\"height\\":500}}]}]"}',
      {
        headers: {
          authorization: `Bearer ${vars['jwt']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://apicoretest.eoxvantage.com/user/me/updatesession', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://coretest.eoxvantage.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(3.2)

    response = http.get('https://coretest.eoxvantage.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })
}
