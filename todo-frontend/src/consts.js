import "react";

const url = import.meta.env.API_ENDPOINT_URL || "http://aws-java-day-1-oliver-lundh-ande-env.eba-xspexua5.eu-west-1.elasticbeanstalk.com";
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
