import "react";

const url = import.meta.env.API_ENDPOINT_URL || "http://springtodotuva-env.eba-gt2misxq.eu-west-1.elasticbeanstalk.com";
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
