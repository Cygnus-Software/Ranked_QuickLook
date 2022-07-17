import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
import schema from '@functions/hello/schema';
import getPlayersSch from '@res/schemas/getPlayer';

const serverlessConfiguration: AWS = {
  service: 'aws-serverless-typescript-api',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: {
    hello: {
      handler: 'src/functions/hello/handler.main',
      events: [
        {
          http: {
            method: 'post',
            path: 'hello',
            request: {
              schemas: {
                'application/json': schema,
              }
            }
          },
        }
      ]
    },
    players: {
      handler: 'src/functions/players/getPlayers.handler',
      events: [
        {
          http: {
            method: 'post',
            path: 'players',
            request: {
              schemas: {
                'application/json': getPlayersSch,
              }
            }
          },
        }
      ]
    }
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
