import path = require('path')
import {
  rebuild,
  rebuildPkgs,
  PnpmOptions,
} from 'supi'

export default async function (
  args: string[],
  opts: PnpmOptions,
  command: string
) {
  if (args.length === 0) {
    await rebuild(opts)
  }
  await rebuildPkgs(args, opts)
}
