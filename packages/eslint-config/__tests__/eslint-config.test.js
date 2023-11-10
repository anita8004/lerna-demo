import { strict as assert } from 'assert';
import eslintConfig from '..';

assert.strictEqual(eslintConfig(), 'Hello from eslintConfig');
console.info('eslintConfig tests passed');
