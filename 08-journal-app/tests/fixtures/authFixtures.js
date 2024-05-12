export const initialState = {
    status: 'checking', //  'checkin', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState = {
    status: 'authenticated', //  'checkin', 'not-authenticated', 'authenticated'
    uid: '123ABC',
    email: 'test@test.com',
    displayName: 'test user',
    photoURL: 'https://user.jpg',
    errorMessage: null
}

export const notAuthenticatedState = {
    status: 'not-authenticated', //  'checkin', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser = {
    uid: '123ABC',
    status: 'authenticated', //  'checkin', 'not-authenticated', 'authenticated'
    email: 'adrian@adrian.com',
    displayName: 'test user adrian',
    photoURL: 'https://adrian.jpg',
    errorMessage: null
}
