import "react";

const url = import.meta.env.API_ENDPOINT_URL || "http://springtodoemmalovgren-env.eba-i5cihyby.eu-west-1.elasticbeanstalk.com";
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
