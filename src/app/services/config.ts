const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmVmN2M1YWEyNDMwOTI2MDE5ZTgyMjRmNjg0OGU4MyIsIm5iZiI6MTcyMjgxMDI0Ni4yMDcyMzYsInN1YiI6IjY2YWE2MWQ1ZjljOWY5ZjNhNGUzYzEyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZnMkiFrF_RcZ40YP3I881oXRVrgkVaoYX1yyzSh2ffw"; //TODO: Variables de entorno

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};
