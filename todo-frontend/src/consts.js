import "react";

const url = import.meta.env.API_ENDPOINT_URL || "http://To-do-melvin-env.eba-sex6wrt3.eu-west-1.elasticbeanstalk.com";
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
