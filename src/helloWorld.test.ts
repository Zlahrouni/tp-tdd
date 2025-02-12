import { hello } from "./helloWord";
import { describe, expect, it } from "vitest";

describe('hello function', () => {
    it('should return Hello, World!', () => {
        expect(hello()).toBe('Hello, World!');
    });
  });