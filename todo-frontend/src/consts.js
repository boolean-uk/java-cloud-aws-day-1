import "react";

const url = import.meta.env.API_ENDPOINT_URL || "http://aws-java-day-1-iris-flystam-api-env.eba-ppkezszv.eu-west-1.elasticbeanstalk.com";
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
