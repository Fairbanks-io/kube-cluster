---
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Golang

<p align="center">

  <img width="150px" src={useBaseUrl('/img/golang.svg')} alt="golang-logo"  />

</p>

### Static Binaries

One advantage of Golang is the ability to create a single executable for your application which results in very small Docker images with a minimal attack footprint.

[GoHTTP](https://github.com/Fairbanks-io/GoHTTP) is one such app that uses this type of setup.

First, we modify the build script to bundle C libraries when the app is compiled:
```
CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main ./src
```

Then, create a simple Dockerfile using scratch as shown below:
```
FROM scratch
COPY ca-certificates.crt /etc/ssl/certs/
COPY . .
CMD ["/main"]
```

Note: Make sure to copy in certificates or you may get X509 errors when making https requests!

Finally, the container can be launched like any other:
```
docker run -d -p 8000:8000  fairbanksio/gohttp
```

Utilizing static binaries can reduce Golang based Docker image files by as much as 10%!
