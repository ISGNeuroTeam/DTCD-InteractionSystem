# InteractionSystem

Core system-plugin (part of DTCD-SDK) for HTTP requests in [DTCD](https://github.com/ISGNeuroTeam/DTCD) application.

## Getting Started

In order to use this plugin you need to download it, build and move build-file to _plugins_ folder on DTCD server.

### Prerequisites

- [node.js](https://nodejs.org/en/) LTS version 14.x.x
- `make` utility
- [DTCD](https://github.com/ISGNeuroTeam/DTCD) application

### Building

```
make build
```

## Running the tests

```
make test
```

## Create build package

```
make pack
```

## Clear dependencies

```
make clear
```

## Deployment

Create package, then move archive to _plugins_ folder on DTCD server and unarchive it with the following commands:

```
tar -zxf DTCD-InteractionSystem-*.tar.gz ./DTCD-InteractionSystem/InteractionSystem.js
mv ./DTCD-InteractionSystem/InteractionSystem.js InteractionSystem.js
```

## Built With

- [rollup](https://rollupjs.org/guide/en/) - Builder
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## Contributing

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ISGNeuroTeam/DTCD-InteractionSystem/tags).

Also you can see the [CHANGELOG](CHANGELOG.md) file.

## Authors

Konstantin Rozov (konstantin@isgneuro.com)

## License

This project is licensed under the OT.PLATFORM license agreement - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
