"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8375],
	{
		10764: function (t, e, r) {
			let i;
			r.r(e),
				r.d(e, {
					Errors: function () {
						return ei;
					},
					STAGE: function () {
						return H;
					},
					TREE: function () {
						return ed;
					},
					WORKDIR: function () {
						return ew;
					},
					abortMerge: function () {
						return eS;
					},
					add: function () {
						return eC;
					},
					addNote: function () {
						return eL;
					},
					addRemote: function () {
						return eK;
					},
					annotatedTag: function () {
						return eY;
					},
					branch: function () {
						return eX;
					},
					checkout: function () {
						return e2;
					},
					clone: function () {
						return rE;
					},
					commit: function () {
						return rk;
					},
					currentBranch: function () {
						return rS;
					},
					deleteBranch: function () {
						return rR;
					},
					deleteRef: function () {
						return rI;
					},
					deleteRemote: function () {
						return rP;
					},
					deleteTag: function () {
						return rU;
					},
					expandOid: function () {
						return rD;
					},
					expandRef: function () {
						return rM;
					},
					fastForward: function () {
						return rL;
					},
					fetch: function () {
						return rV;
					},
					findMergeBase: function () {
						return rK;
					},
					findRoot: function () {
						return rY;
					},
					getConfig: function () {
						return rJ;
					},
					getConfigAll: function () {
						return rQ;
					},
					getRemoteInfo: function () {
						return r0;
					},
					getRemoteInfo2: function () {
						return r2;
					},
					hashBlob: function () {
						return r4;
					},
					indexPack: function () {
						return r3;
					},
					init: function () {
						return r9;
					},
					isDescendent: function () {
						return r7;
					},
					isIgnored: function () {
						return it;
					},
					listBranches: function () {
						return ie;
					},
					listFiles: function () {
						return ia;
					},
					listNotes: function () {
						return io;
					},
					listRemotes: function () {
						return il;
					},
					listServerRefs: function () {
						return ih;
					},
					listTags: function () {
						return iw;
					},
					log: function () {
						return i$;
					},
					merge: function () {
						return i_;
					},
					packObjects: function () {
						return ik;
					},
					pull: function () {
						return iS;
					},
					push: function () {
						return iA;
					},
					readBlob: function () {
						return iB;
					},
					readCommit: function () {
						return iN;
					},
					readNote: function () {
						return iM;
					},
					readObject: function () {
						return iT;
					},
					readTag: function () {
						return iz;
					},
					readTree: function () {
						return iW;
					},
					remove: function () {
						return iF;
					},
					removeNote: function () {
						return iq;
					},
					renameBranch: function () {
						return iV;
					},
					resetIndex: function () {
						return iZ;
					},
					resolveRef: function () {
						return iY;
					},
					setConfig: function () {
						return iJ;
					},
					status: function () {
						return iX;
					},
					statusMatrix: function () {
						return i1;
					},
					tag: function () {
						return i2;
					},
					updateIndex: function () {
						return i8;
					},
					version: function () {
						return i4;
					},
					walk: function () {
						return i6;
					},
					writeBlob: function () {
						return i3;
					},
					writeCommit: function () {
						return i5;
					},
					writeObject: function () {
						return i7;
					},
					writeRef: function () {
						return at;
					},
					writeTag: function () {
						return ar;
					},
					writeTree: function () {
						return ai;
					},
				});
			var a = r(99758),
				n = r(18336),
				s = r(34606),
				o = r(99591),
				c = r(12352),
				l = r(15151),
				f = r(61990),
				u = r(99027),
				d = r(48764).Buffer,
				h = r(34155);
			class w extends Error {
				constructor(t) {
					super(t), (this.caller = "");
				}
				toJSON() {
					return { code: this.code, data: this.data, caller: this.caller, message: this.message, stack: this.stack };
				}
				fromJSON(t) {
					let e = new w(t.message);
					return (e.code = t.code), (e.data = t.data), (e.caller = t.caller), (e.stack = t.stack), e;
				}
				get isIsomorphicGitError() {
					return !0;
				}
			}
			class m extends w {
				constructor(t) {
					super(`Modifying the index is not possible because you have unmerged files: ${t.toString}. Fix them up in the work tree, and then use 'git add/rm as appropriate to mark resolution and make a commit.`),
						(this.code = this.name = m.code),
						(this.data = { filepaths: t });
				}
			}
			m.code = "UnmergedPathsError";
			class p extends w {
				constructor(t) {
					super(`An internal error caused this command to fail. Please file a bug report at https://github.com/isomorphic-git/isomorphic-git/issues with this error message: ${t}`),
						(this.code = this.name = p.code),
						(this.data = { message: t });
				}
			}
			p.code = "InternalError";
			class g extends w {
				constructor(t) {
					super(`The filepath "${t}" contains unsafe character sequences`), (this.code = this.name = g.code), (this.data = { filepath: t });
				}
			}
			g.code = "UnsafeFilepathError";
			class y {
				constructor(t) {
					(this.buffer = t), (this._start = 0);
				}
				eof() {
					return this._start >= this.buffer.length;
				}
				tell() {
					return this._start;
				}
				seek(t) {
					this._start = t;
				}
				slice(t) {
					let e = this.buffer.slice(this._start, this._start + t);
					return (this._start += t), e;
				}
				toString(t, e) {
					let r = this.buffer.toString(t, this._start, this._start + e);
					return (this._start += e), r;
				}
				write(t, e, r) {
					let i = this.buffer.write(t, this._start, e, r);
					return (this._start += e), i;
				}
				copy(t, e, r) {
					let i = t.copy(this.buffer, this._start, e, r);
					return (this._start += i), i;
				}
				readUInt8() {
					let t = this.buffer.readUInt8(this._start);
					return (this._start += 1), t;
				}
				writeUInt8(t) {
					let e = this.buffer.writeUInt8(t, this._start);
					return (this._start += 1), e;
				}
				readUInt16BE() {
					let t = this.buffer.readUInt16BE(this._start);
					return (this._start += 2), t;
				}
				writeUInt16BE(t) {
					let e = this.buffer.writeUInt16BE(t, this._start);
					return (this._start += 2), e;
				}
				readUInt32BE() {
					let t = this.buffer.readUInt32BE(this._start);
					return (this._start += 4), t;
				}
				writeUInt32BE(t) {
					let e = this.buffer.writeUInt32BE(t, this._start);
					return (this._start += 4), e;
				}
			}
			function b(t, e) {
				return -(t < e) || +(t > e);
			}
			function $(t, e) {
				return b(t.path, e.path);
			}
			function _(t) {
				let e = t > 0 ? t >> 12 : 0;
				4 !== e && 8 !== e && 10 !== e && 14 !== e && (e = 8);
				let r = 511 & t;
				return (r = 73 & r ? 493 : 420), 8 !== e && (r = 0), (e << 12) + r;
			}
			function v(t, e, r, i) {
				if (void 0 !== t && void 0 !== e) return [t, e];
				void 0 === r && (r = i.valueOf());
				let a = Math.floor(r / 1e3),
					n = (r - 1e3 * a) * 1e6;
				return [a, n];
			}
			function x(t) {
				let [e, r] = v(t.ctimeSeconds, t.ctimeNanoseconds, t.ctimeMs, t.ctime),
					[i, a] = v(t.mtimeSeconds, t.mtimeNanoseconds, t.mtimeMs, t.mtime);
				return {
					ctimeSeconds: e % 4294967296,
					ctimeNanoseconds: r % 4294967296,
					mtimeSeconds: i % 4294967296,
					mtimeNanoseconds: a % 4294967296,
					dev: t.dev % 4294967296,
					ino: t.ino % 4294967296,
					mode: _(t.mode % 4294967296),
					uid: t.uid % 4294967296,
					gid: t.gid % 4294967296,
					size: t.size > -1 ? t.size % 4294967296 : 0,
				};
			}
			let E = null;
			async function k(t) {
				return null === E && (E = await j()), E ? S(t) : new n().update(t).digest("hex");
			}
			async function S(t) {
				return (function (t) {
					let e = "";
					for (let r of new Uint8Array(t)) r < 16 && (e += "0"), (e += r.toString(16));
					return e;
				})(await crypto.subtle.digest("SHA-1", t));
			}
			async function j() {
				try {
					let t = await S(new Uint8Array([]));
					if ("da39a3ee5e6b4b0d3255bfef95601890afd80709" === t) return !0;
				} catch (t) { }
				return !1;
			}
			class R {
				constructor(t, e) {
					(this._dirty = !1), (this._unmergedPaths = e || new Set()), (this._entries = t || new Map());
				}
				_addEntry(t) {
					if (0 === t.flags.stage) (t.stages = [t]), this._entries.set(t.path, t), this._unmergedPaths.delete(t.path);
					else {
						let e = this._entries.get(t.path);
						e || (this._entries.set(t.path, t), (e = t)), (e.stages[t.flags.stage] = t), this._unmergedPaths.add(t.path);
					}
				}
				static async from(t) {
					if (d.isBuffer(t)) return R.fromBuffer(t);
					if (null === t) return new R(null);
					throw new p("invalid type passed to GitIndex.from");
				}
				static async fromBuffer(t) {
					if (0 === t.length) throw new p("Index file is empty (.git/index)");
					let e = new R(),
						r = new y(t),
						i = r.toString("utf8", 4);
					if ("DIRC" !== i) throw new p(`Invalid dircache magic file number: ${i}`);
					let a = await k(t.slice(0, -20)),
						n = t.slice(-20).toString("hex");
					if (n !== a) throw new p(`Invalid checksum in GitIndex buffer: expected ${n} but saw ${a}`);
					let s = r.readUInt32BE();
					if (2 !== s) throw new p(`Unsupported dircache version: ${s}`);
					let o = r.readUInt32BE(),
						c = 0;
					for (; !r.eof() && c < o;) {
						let i = {};
						(i.ctimeSeconds = r.readUInt32BE()),
							(i.ctimeNanoseconds = r.readUInt32BE()),
							(i.mtimeSeconds = r.readUInt32BE()),
							(i.mtimeNanoseconds = r.readUInt32BE()),
							(i.dev = r.readUInt32BE()),
							(i.ino = r.readUInt32BE()),
							(i.mode = r.readUInt32BE()),
							(i.uid = r.readUInt32BE()),
							(i.gid = r.readUInt32BE()),
							(i.size = r.readUInt32BE()),
							(i.oid = r.slice(20).toString("hex"));
						let a = r.readUInt16BE();
						i.flags = { assumeValid: !!(32768 & a), extended: !!(16384 & a), stage: (12288 & a) >> 12, nameLength: 4095 & a };
						let n = t.indexOf(0, r.tell() + 1) - r.tell();
						if (n < 1) throw new p(`Got a path length of: ${n}`);
						if (((i.path = r.toString("utf8", n)), i.path.includes("..\\") || i.path.includes("../"))) throw new g(i.path);
						let s = 8 - ((r.tell() - 12) % 8);
						for (0 === s && (s = 8); s--;) {
							let t = r.readUInt8();
							if (0 !== t) throw new p(`Expected 1-8 null characters but got '${t}' after ${i.path}`);
							if (r.eof()) throw new p("Unexpected end of file");
						}
						(i.stages = []), e._addEntry(i), c++;
					}
					return e;
				}
				get unmergedPaths() {
					return [...this._unmergedPaths];
				}
				get entries() {
					return [...this._entries.values()].sort($);
				}
				get entriesMap() {
					return this._entries;
				}
				get entriesFlat() {
					return [...this.entries].flatMap((t) => (t.stages.length > 1 ? t.stages.filter((t) => t) : t));
				}
				*[Symbol.iterator]() {
					for (let t of this.entries) yield t;
				}
				insert({ filepath: t, stats: e, oid: r, stage: i = 0 }) {
					e || (e = { ctimeSeconds: 0, ctimeNanoseconds: 0, mtimeSeconds: 0, mtimeNanoseconds: 0, dev: 0, ino: 0, mode: 0, uid: 0, gid: 0, size: 0 }), (e = x(e));
					let a = d.from(t),
						n = {
							ctimeSeconds: e.ctimeSeconds,
							ctimeNanoseconds: e.ctimeNanoseconds,
							mtimeSeconds: e.mtimeSeconds,
							mtimeNanoseconds: e.mtimeNanoseconds,
							dev: e.dev,
							ino: e.ino,
							mode: e.mode || 33188,
							uid: e.uid,
							gid: e.gid,
							size: e.size,
							path: t,
							oid: r,
							flags: { assumeValid: !1, extended: !1, stage: i, nameLength: a.length < 4095 ? a.length : 4095 },
							stages: [],
						};
					this._addEntry(n), (this._dirty = !0);
				}
				delete({ filepath: t }) {
					if (this._entries.has(t)) this._entries.delete(t);
					else for (let e of this._entries.keys()) e.startsWith(t + "/") && this._entries.delete(e);
					this._unmergedPaths.has(t) && this._unmergedPaths.delete(t), (this._dirty = !0);
				}
				clear() {
					this._entries.clear(), (this._dirty = !0);
				}
				has({ filepath: t }) {
					return this._entries.has(t);
				}
				render() {
					return this.entries.map((t) => `${t.mode.toString(8)} ${t.oid}    ${t.path}`).join("\n");
				}
				static async _entryToBuffer(t) {
					let e = d.from(t.path),
						r = 8 * Math.ceil((62 + e.length + 1) / 8),
						i = d.alloc(r),
						a = new y(i),
						n = x(t);
					return (
						a.writeUInt32BE(n.ctimeSeconds),
						a.writeUInt32BE(n.ctimeNanoseconds),
						a.writeUInt32BE(n.mtimeSeconds),
						a.writeUInt32BE(n.mtimeNanoseconds),
						a.writeUInt32BE(n.dev),
						a.writeUInt32BE(n.ino),
						a.writeUInt32BE(n.mode),
						a.writeUInt32BE(n.uid),
						a.writeUInt32BE(n.gid),
						a.writeUInt32BE(n.size),
						a.write(t.oid, 20, "hex"),
						a.writeUInt16BE(
							(function (t) {
								let e = t.flags;
								return (e.extended = !1), (e.nameLength = Math.min(d.from(t.path).length, 4095)), (e.assumeValid ? 32768 : 0) + (e.extended ? 16384 : 0) + ((3 & e.stage) << 12) + (4095 & e.nameLength);
							})(t)
						),
						a.write(t.path, e.length, "utf8"),
						i
					);
				}
				async toObject() {
					let t = d.alloc(12),
						e = new y(t);
					e.write("DIRC", 4, "utf8"), e.writeUInt32BE(2), e.writeUInt32BE(this.entriesFlat.length);
					let r = [];
					for (let t of this.entries) if ((r.push(R._entryToBuffer(t)), t.stages.length > 1)) for (let e of t.stages) e && e !== t && r.push(R._entryToBuffer(e));
					r = await Promise.all(r);
					let i = d.concat(r),
						a = d.concat([t, i]),
						n = await k(a);
					return d.concat([a, d.from(n, "hex")]);
				}
			}
			function I(t, e, r = !0, i = !0) {
				let a = x(t),
					n = x(e);
				return (r && a.mode !== n.mode) || a.mtimeSeconds !== n.mtimeSeconds || a.ctimeSeconds !== n.ctimeSeconds || a.uid !== n.uid || a.gid !== n.gid || (i && a.ino !== n.ino) || a.size !== n.size;
			}
			let O = null,
				P = Symbol("IndexCache");
			async function A(t, e, r) {
				let i = await t.lstat(e),
					a = await t.read(e),
					n = await R.from(a);
				r.map.set(e, n), r.stats.set(e, i);
			}
			async function U(t, e, r) {
				let i = r.stats.get(e);
				if (void 0 === i) return !0;
				let a = await t.lstat(e);
				return null !== i && null !== a && I(i, a);
			}
			class C {
				static async acquire({ fs: t, gitdir: e, cache: r, allowUnmerged: i = !0 }, n) {
					let s;
					r[P] || (r[P] = { map: new Map(), stats: new Map() });
					let o = `${e}/index`;
					null === O && (O = new a({ maxPending: 1 / 0 }));
					let c = [];
					return (
						await O.acquire(o, async () => {
							(await U(t, o, r[P])) && (await A(t, o, r[P]));
							let e = r[P].map.get(o);
							if ((c = e.unmergedPaths).length && !i) throw new m(c);
							if (((s = await n(e)), e._dirty)) {
								let i = await e.toObject();
								await t.write(o, i), r[P].stats.set(o, await t.lstat(o)), (e._dirty = !1);
							}
						}),
						s
					);
				}
			}
			function B(t) {
				let e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
				return e > -1 && (t = t.slice(e + 1)), t;
			}
			function N(t) {
				let e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
				return -1 === e ? "." : 0 === e ? "/" : t.slice(0, e);
			}
			function D(t) {
				let e = new Map(),
					r = function (t) {
						if (!e.has(t)) {
							let i = { type: "tree", fullpath: t, basename: B(t), metadata: {}, children: [] };
							e.set(t, i), (i.parent = r(N(t))), i.parent && i.parent !== i && i.parent.children.push(i);
						}
						return e.get(t);
					};
				for (let i of (r("."), t))
					!(function (t, i) {
						if (!e.has(t)) {
							let a = { type: "blob", fullpath: t, basename: B(t), metadata: i, parent: r(N(t)), children: [] };
							a.parent && a.parent.children.push(a), e.set(t, a);
						}
						e.get(t);
					})(i.path, i);
				return e;
			}
			class M {
				constructor({ fs: t, gitdir: e, cache: r }) {
					this.treePromise = C.acquire({ fs: t, gitdir: e, cache: r }, async function (t) {
						return D(t.entries);
					});
					let i = this;
					this.ConstructEntry = class {
						constructor(t) {
							(this._fullpath = t), (this._type = !1), (this._mode = !1), (this._stat = !1), (this._oid = !1);
						}
						async type() {
							return i.type(this);
						}
						async mode() {
							return i.mode(this);
						}
						async stat() {
							return i.stat(this);
						}
						async content() {
							return i.content(this);
						}
						async oid() {
							return i.oid(this);
						}
					};
				}
				async readdir(t) {
					let e = t._fullpath,
						r = (await this.treePromise).get(e);
					if (!r || "blob" === r.type) return null;
					if ("tree" !== r.type) throw Error(`ENOTDIR: not a directory, scandir '${e}'`);
					let i = r.children.map((t) => t.fullpath);
					return i.sort(b), i;
				}
				async type(t) {
					return !1 === t._type && (await t.stat()), t._type;
				}
				async mode(t) {
					return !1 === t._mode && (await t.stat()), t._mode;
				}
				async stat(t) {
					if (!1 === t._stat) {
						let e = (await this.treePromise).get(t._fullpath);
						if (!e) throw Error(`ENOENT: no such file or directory, lstat '${t._fullpath}'`);
						let r = "tree" === e.type ? {} : x(e.metadata);
						(t._type =
							"tree" === e.type
								? "tree"
								: (function (t) {
									switch (t) {
										case 16384:
											return "tree";
										case 33188:
										case 33261:
										case 40960:
											return "blob";
										case 57344:
											return "commit";
									}
									throw new p(`Unexpected GitTree entry mode: ${t.toString(8)}`);
								})(r.mode)),
							(t._mode = r.mode),
							"tree" === e.type ? (t._stat = void 0) : (t._stat = r);
					}
					return t._stat;
				}
				async content(t) { }
				async oid(t) {
					if (!1 === t._oid) {
						let e = (await this.treePromise).get(t._fullpath);
						t._oid = e.metadata.oid;
					}
					return t._oid;
				}
			}
			let T = Symbol("GitWalkSymbol");
			function H() {
				let t = Object.create(null);
				return (
					Object.defineProperty(t, T, {
						value: function ({ fs: t, gitdir: e, cache: r }) {
							return new M({ fs: t, gitdir: e, cache: r });
						},
					}),
					Object.freeze(t),
					t
				);
			}
			class z extends w {
				constructor(t) {
					super(`Could not find ${t}.`), (this.code = this.name = z.code), (this.data = { what: t });
				}
			}
			z.code = "NotFoundError";
			class W extends w {
				constructor(t, e, r, i) {
					super(`Object ${t} ${i ? `at ${i}` : ""}was anticipated to be a ${r} but it is a ${e}.`), (this.code = this.name = W.code), (this.data = { oid: t, actual: e, expected: r, filepath: i });
				}
			}
			W.code = "ObjectTypeError";
			class F extends w {
				constructor(t) {
					super(`Expected a 40-char hex object id but saw "${t}".`), (this.code = this.name = F.code), (this.data = { value: t });
				}
			}
			F.code = "InvalidOidError";
			class G extends w {
				constructor(t) {
					super(`Could not find a fetch refspec for remote "${t}". Make sure the config file has an entry like the following:
[remote "${t}"]
	fetch = +refs/heads/*:refs/remotes/origin/*
`),
						(this.code = this.name = G.code),
						(this.data = { remote: t });
				}
			}
			G.code = "NoRefspecError";
			class q {
				constructor(t) {
					if (((this.refs = new Map()), (this.parsedConfig = []), t)) {
						let e = null;
						this.parsedConfig = t
							.trim()
							.split("\n")
							.map((t) => {
								if (/^\s*#/.test(t)) return { line: t, comment: !0 };
								let r = t.indexOf(" ");
								if (t.startsWith("^")) {
									let r = t.slice(1);
									return this.refs.set(e + "^{}", r), { line: t, ref: e, peeled: r };
								}
								{
									let i = t.slice(0, r);
									return (e = t.slice(r + 1)), this.refs.set(e, i), { line: t, ref: e, oid: i };
								}
							});
					}
					return this;
				}
				static from(t) {
					return new q(t);
				}
				delete(t) {
					(this.parsedConfig = this.parsedConfig.filter((e) => e.ref !== t)), this.refs.delete(t);
				}
				toString() {
					return this.parsedConfig.map(({ line: t }) => t).join("\n") + "\n";
				}
			}
			class L {
				constructor({ remotePath: t, localPath: e, force: r, matchPrefix: i }) {
					Object.assign(this, { remotePath: t, localPath: e, force: r, matchPrefix: i });
				}
				static from(t) {
					let [e, r, i, a, n] = t.match(/^(\+?)(.*?)(\*?):(.*?)(\*?)$/).slice(1),
						s = "*" === i;
					if (s !== ("*" === n)) throw new p("Invalid refspec");
					return new L({ remotePath: r, localPath: a, force: "+" === e, matchPrefix: s });
				}
				translate(t) {
					if (this.matchPrefix) {
						if (t.startsWith(this.remotePath)) return this.localPath + t.replace(this.remotePath, "");
					} else if (t === this.remotePath) return this.localPath;
					return null;
				}
				reverseTranslate(t) {
					if (this.matchPrefix) {
						if (t.startsWith(this.localPath)) return this.remotePath + t.replace(this.localPath, "");
					} else if (t === this.localPath) return this.remotePath;
					return null;
				}
			}
			class V {
				constructor(t = []) {
					this.rules = t;
				}
				static from(t) {
					let e = [];
					for (let r of t) e.push(L.from(r));
					return new V(e);
				}
				add(t) {
					let e = L.from(t);
					this.rules.push(e);
				}
				translate(t) {
					let e = [];
					for (let r of this.rules)
						for (let i of t) {
							let t = r.translate(i);
							t && e.push([i, t]);
						}
					return e;
				}
				translateOne(t) {
					let e = null;
					for (let r of this.rules) {
						let i = r.translate(t);
						i && (e = i);
					}
					return e;
				}
				localNamespaces() {
					return this.rules.filter((t) => t.matchPrefix).map((t) => t.localPath.replace(/\/$/, ""));
				}
			}
			function K(t, e) {
				let r = t.replace(/\^\{\}$/, ""),
					i = e.replace(/\^\{\}$/, ""),
					a = -(r < i) || +(r > i);
				return 0 === a ? (t.endsWith("^{}") ? 1 : -1) : a;
			}
			let Z = new Map();
			function Y(t) {
				var e;
				let r = Z.get(t);
				return (
					r ||
					((r =
						"/." ===
							(e = (e = t)
								.split("/./")
								.join("/")
								.replace(/\/{2,}/g, "/"))
							? "/"
							: "./" === e
								? "."
								: (e.startsWith("./") && (e = e.slice(2)), e.endsWith("/.") && (e = e.slice(0, -2)), e.length > 1 && e.endsWith("/") && (e = e.slice(0, -1)), "" === e)
									? "."
									: e),
						Z.set(t, r)),
					r
				);
			}
			function J(...t) {
				return Y(t.map(Y).join("/"));
			}
			let X = (t) => {
				if ("true" === (t = t.trim().toLowerCase()) || "yes" === t || "on" === t) return !0;
				if ("false" === t || "no" === t || "off" === t) return !1;
				throw Error(`Expected 'true', 'false', 'yes', 'no', 'on', or 'off', but got ${t}`);
			},
				Q = {
					core: {
						filemode: X,
						bare: X,
						logallrefupdates: X,
						symlinks: X,
						ignorecase: X,
						bigFileThreshold: (t) => {
							let e = parseInt((t = t.toLowerCase()));
							return t.endsWith("k") && (e *= 1024), t.endsWith("m") && (e *= 1048576), t.endsWith("g") && (e *= 1073741824), e;
						},
					},
				},
				tt = /^\[([A-Za-z0-9-.]+)(?: "(.*)")?\]$/,
				te = /^[A-Za-z0-9-.]+$/,
				tr = /^([A-Za-z][A-Za-z-]*)(?: *= *(.*))?$/,
				ti = /^[A-Za-z][A-Za-z-]*$/,
				ta = /^(.*?)( *[#;].*)$/,
				tn = (t) => {
					let e = tt.exec(t);
					if (null != e) {
						let [t, r] = e.slice(1);
						return [t, r];
					}
					return null;
				},
				ts = (t) => {
					let e = tr.exec(t);
					if (null != e) {
						let [t, r = "true"] = e.slice(1);
						return [t, tl(to(r))];
					}
					return null;
				},
				to = (t) => {
					let e = ta.exec(t);
					if (null == e) return t;
					let [r, i] = e.slice(1);
					return tc(r) && tc(i) ? `${r}${i}` : r;
				},
				tc = (t) => (t.match(/(?:^|[^\\])"/g) || []).length % 2 != 0,
				tl = (t) =>
					t.split("").reduce((t, e, r, i) => {
						let a = '"' === e && "\\" !== i[r - 1],
							n = "\\" === e && '"' === i[r + 1];
						return a || n ? t : t + e;
					}, ""),
				tf = (t) => (null != t ? t.toLowerCase() : null),
				tu = (t, e, r) => [tf(t), e, tf(r)].filter((t) => null != t).join("."),
				td = (t) => {
					let e = t.split("."),
						r = e.shift(),
						i = e.pop(),
						a = e.length ? e.join(".") : void 0;
					return { section: r, subsection: a, name: i, path: tu(r, a, i), sectionPath: tu(r, a, null) };
				},
				th = (t, e) => t.reduce((t, r, i) => (e(r) ? i : t), -1);
			class tw {
				constructor(t) {
					let e = null,
						r = null;
					this.parsedConfig = t
						? t.split("\n").map((t) => {
							let i = null,
								a = null,
								n = t.trim(),
								s = tn(n),
								o = null != s;
							if (o) [e, r] = s;
							else {
								let t = ts(n);
								null != t && ([i, a] = t);
							}
							let c = tu(e, r, i);
							return { line: t, isSection: o, section: e, subsection: r, name: i, value: a, path: c };
						})
						: [];
				}
				static from(t) {
					return new tw(t);
				}
				async get(t, e = !1) {
					let r = td(t).path,
						i = this.parsedConfig
							.filter((t) => t.path === r)
							.map(({ section: t, name: e, value: r }) => {
								let i = Q[t] && Q[t][e];
								return i ? i(r) : r;
							});
					return e ? i : i.pop();
				}
				async getall(t) {
					return this.get(t, !0);
				}
				async getSubsections(t) {
					return this.parsedConfig.filter((e) => e.section === t && e.isSection).map((t) => t.subsection);
				}
				async deleteSection(t, e) {
					this.parsedConfig = this.parsedConfig.filter((r) => !(r.section === t && r.subsection === e));
				}
				async append(t, e) {
					return this.set(t, e, !0);
				}
				async set(t, e, r = !1) {
					let { section: i, subsection: a, name: n, path: s, sectionPath: o } = td(t),
						c = th(this.parsedConfig, (t) => t.path === s);
					if (null == e) -1 !== c && this.parsedConfig.splice(c, 1);
					else if (-1 !== c) {
						let t = Object.assign({}, this.parsedConfig[c], { name: n, value: e, modified: !0 });
						r ? this.parsedConfig.splice(c + 1, 0, t) : (this.parsedConfig[c] = t);
					} else {
						let t = this.parsedConfig.findIndex((t) => t.path === o),
							r = { section: i, subsection: a, name: n, value: e, modified: !0, path: s };
						te.test(i) && ti.test(n) && (t >= 0 ? this.parsedConfig.splice(t + 1, 0, r) : this.parsedConfig.push({ section: i, subsection: a, modified: !0, path: o }, r));
					}
				}
				toString() {
					return this.parsedConfig
						.map(({ line: t, section: e, subsection: r, name: i, value: a, modified: n = !1 }) =>
							n ? (null != i && null != a ? ("string" == typeof a && /[#;]/.test(a) ? `	${i} = "${a}"` : `	${i} = ${a}`) : null != r ? `[${e} "${r}"]` : `[${e}]`) : t
						)
						.join("\n");
				}
			}
			class tm {
				static async get({ fs: t, gitdir: e }) {
					let r = await t.read(`${e}/config`, { encoding: "utf8" });
					return tw.from(r);
				}
				static async save({ fs: t, gitdir: e, config: r }) {
					await t.write(`${e}/config`, r.toString(), { encoding: "utf8" });
				}
			}
			let tp = (t) => [`${t}`, `refs/${t}`, `refs/tags/${t}`, `refs/heads/${t}`, `refs/remotes/${t}`, `refs/remotes/${t}/HEAD`],
				tg = ["config", "description", "index", "shallow", "commondir"];
			async function ty(t, e) {
				return void 0 === i && (i = new a()), i.acquire(t, e);
			}
			class tb {
				static async updateRemoteRefs({ fs: t, gitdir: e, remote: r, refs: i, symrefs: a, tags: n, refspecs: s, prune: o = !1, pruneTags: c = !1 }) {
					for (let t of i.values()) if (!t.match(/[0-9a-f]{40}/)) throw new F(t);
					let l = await tm.get({ fs: t, gitdir: e });
					if (!s) {
						if (0 === (s = await l.getall(`remote.${r}.fetch`)).length) throw new G(r);
						s.unshift(`+HEAD:refs/remotes/${r}/HEAD`);
					}
					let f = V.from(s),
						u = new Map();
					if (c) {
						let r = await tb.listRefs({ fs: t, gitdir: e, filepath: "refs/tags" });
						await tb.deleteRefs({ fs: t, gitdir: e, refs: r.map((t) => `refs/tags/${t}`) });
					}
					if (n) {
						for (let r of i.keys())
							if (r.startsWith("refs/tags") && !r.endsWith("^{}") && !(await tb.exists({ fs: t, gitdir: e, ref: r }))) {
								let t = i.get(r);
								u.set(r, t);
							}
					}
					for (let [t, e] of f.translate([...i.keys()])) {
						let r = i.get(t);
						u.set(e, r);
					}
					for (let [t, e] of f.translate([...a.keys()])) {
						let r = a.get(t),
							i = f.translateOne(r);
						i && u.set(e, `ref: ${i}`);
					}
					let d = [];
					if (o) {
						for (let r of f.localNamespaces()) for (let i of (await tb.listRefs({ fs: t, gitdir: e, filepath: r })).map((t) => `${r}/${t}`)) u.has(i) || d.push(i);
						d.length > 0 && (await tb.deleteRefs({ fs: t, gitdir: e, refs: d }));
					}
					for (let [r, i] of u)
						await ty(r, async () =>
							t.write(
								J(e, r),
								`${i.trim()}
`,
								"utf8"
							)
						);
					return { pruned: d };
				}
				static async writeRef({ fs: t, gitdir: e, ref: r, value: i }) {
					if (!i.match(/[0-9a-f]{40}/)) throw new F(i);
					await ty(r, async () =>
						t.write(
							J(e, r),
							`${i.trim()}
`,
							"utf8"
						)
					);
				}
				static async writeSymbolicRef({ fs: t, gitdir: e, ref: r, value: i }) {
					await ty(r, async () =>
						t.write(
							J(e, r),
							`ref: ${i.trim()}
`,
							"utf8"
						)
					);
				}
				static async deleteRef({ fs: t, gitdir: e, ref: r }) {
					return tb.deleteRefs({ fs: t, gitdir: e, refs: [r] });
				}
				static async deleteRefs({ fs: t, gitdir: e, refs: r }) {
					await Promise.all(r.map((r) => t.rm(J(e, r))));
					let i = await ty("packed-refs", async () => t.read(`${e}/packed-refs`, { encoding: "utf8" })),
						a = q.from(i),
						n = a.refs.size;
					for (let t of r) a.refs.has(t) && a.delete(t);
					a.refs.size < n && ((i = a.toString()), await ty("packed-refs", async () => t.write(`${e}/packed-refs`, i, { encoding: "utf8" })));
				}
				static async resolve({ fs: t, gitdir: e, ref: r, depth: i }) {
					if (void 0 !== i && -1 == --i) return r;
					if (r.startsWith("ref: ")) return (r = r.slice(5)), tb.resolve({ fs: t, gitdir: e, ref: r, depth: i });
					if (40 === r.length && /[0-9a-f]{40}/.test(r)) return r;
					let a = await tb.packedRefs({ fs: t, gitdir: e });
					for (let n of tp(r).filter((t) => !tg.includes(t))) {
						let r = await ty(n, async () => (await t.read(`${e}/${n}`, { encoding: "utf8" })) || a.get(n));
						if (r) return tb.resolve({ fs: t, gitdir: e, ref: r.trim(), depth: i });
					}
					throw new z(r);
				}
				static async exists({ fs: t, gitdir: e, ref: r }) {
					try {
						return await tb.expand({ fs: t, gitdir: e, ref: r }), !0;
					} catch (t) {
						return !1;
					}
				}
				static async expand({ fs: t, gitdir: e, ref: r }) {
					if (40 === r.length && /[0-9a-f]{40}/.test(r)) return r;
					let i = await tb.packedRefs({ fs: t, gitdir: e });
					for (let a of tp(r)) if ((await ty(a, async () => t.exists(`${e}/${a}`))) || i.has(a)) return a;
					throw new z(r);
				}
				static async expandAgainstMap({ ref: t, map: e }) {
					for (let r of tp(t)) if (await e.has(r)) return r;
					throw new z(t);
				}
				static resolveAgainstMap({ ref: t, fullref: e = t, depth: r, map: i }) {
					if (void 0 !== r && -1 == --r) return { fullref: e, oid: t };
					if (t.startsWith("ref: ")) return (t = t.slice(5)), tb.resolveAgainstMap({ ref: t, fullref: e, depth: r, map: i });
					if (40 === t.length && /[0-9a-f]{40}/.test(t)) return { fullref: e, oid: t };
					for (let e of tp(t)) {
						let t = i.get(e);
						if (t) return tb.resolveAgainstMap({ ref: t.trim(), fullref: e, depth: r, map: i });
					}
					throw new z(t);
				}
				static async packedRefs({ fs: t, gitdir: e }) {
					let r = await ty("packed-refs", async () => t.read(`${e}/packed-refs`, { encoding: "utf8" }));
					return q.from(r).refs;
				}
				static async listRefs({ fs: t, gitdir: e, filepath: r }) {
					let i = tb.packedRefs({ fs: t, gitdir: e }),
						a = null;
					try {
						a = (a = await t.readdirDeep(`${e}/${r}`)).map((t) => t.replace(`${e}/${r}/`, ""));
					} catch (t) {
						a = [];
					}
					for (let t of (await i).keys()) t.startsWith(r) && ((t = t.replace(r + "/", "")), a.includes(t) || a.push(t));
					return a.sort(K), a;
				}
				static async listBranches({ fs: t, gitdir: e, remote: r }) {
					return r ? tb.listRefs({ fs: t, gitdir: e, filepath: `refs/remotes/${r}` }) : tb.listRefs({ fs: t, gitdir: e, filepath: "refs/heads" });
				}
				static async listTags({ fs: t, gitdir: e }) {
					return (await tb.listRefs({ fs: t, gitdir: e, filepath: "refs/tags" })).filter((t) => !t.endsWith("^{}"));
				}
			}
			function t$(t, e) {
				return b(t_(t), t_(e));
			}
			function t_(t) {
				return "040000" === t.mode ? t.path + "/" : t.path;
			}
			function tv(t) {
				switch (t) {
					case "040000":
						return "tree";
					case "100644":
					case "100755":
					case "120000":
						return "blob";
					case "160000":
						return "commit";
				}
				throw new p(`Unexpected GitTree entry mode: ${t}`);
			}
			function tx(t) {
				return (
					!t.oid && t.sha && (t.oid = t.sha),
					(t.mode = (function (t) {
						if (("number" == typeof t && (t = t.toString(8)), t.match(/^0?4.*/))) return "040000";
						if (t.match(/^1006.*/)) return "100644";
						if (t.match(/^1007.*/)) return "100755";
						if (t.match(/^120.*/)) return "120000";
						if (t.match(/^160.*/)) return "160000";
						throw new p(`Could not understand file mode: ${t}`);
					})(t.mode)),
					t.type || (t.type = tv(t.mode)),
					t
				);
			}
			class tE {
				constructor(t) {
					if (d.isBuffer(t))
						this._entries = (function (t) {
							let e = [],
								r = 0;
							for (; r < t.length;) {
								let i = t.indexOf(32, r);
								if (-1 === i) throw new p(`GitTree: Error parsing buffer at byte location ${r}: Could not find the next space character.`);
								let a = t.indexOf(0, r);
								if (-1 === a) throw new p(`GitTree: Error parsing buffer at byte location ${r}: Could not find the next null character.`);
								let n = t.slice(r, i).toString("utf8");
								"40000" === n && (n = "040000");
								let s = tv(n),
									o = t.slice(i + 1, a).toString("utf8");
								if (o.includes("\\") || o.includes("/")) throw new g(o);
								let c = t.slice(a + 1, a + 21).toString("hex");
								(r = a + 21), e.push({ mode: n, path: o, oid: c, type: s });
							}
							return e;
						})(t);
					else if (Array.isArray(t)) this._entries = t.map(tx);
					else throw new p("invalid type passed to GitTree constructor");
					this._entries.sort($);
				}
				static from(t) {
					return new tE(t);
				}
				render() {
					return this._entries.map((t) => `${t.mode} ${t.type} ${t.oid}    ${t.path}`).join("\n");
				}
				toObject() {
					let t = [...this._entries];
					return (
						t.sort(t$),
						d.concat(
							t.map((t) => {
								let e = d.from(t.mode.replace(/^0/, "")),
									r = d.from(" "),
									i = d.from(t.path, "utf8"),
									a = d.from([0]),
									n = d.from(t.oid, "hex");
								return d.concat([e, r, i, a, n]);
							})
						)
					);
				}
				entries() {
					return this._entries;
				}
				*[Symbol.iterator]() {
					for (let t of this._entries) yield t;
				}
			}
			class tk {
				static wrap({ type: t, object: e }) {
					return d.concat([d.from(`${t} ${e.byteLength.toString()}\0`), d.from(e)]);
				}
				static unwrap(t) {
					let e = t.indexOf(32),
						r = t.indexOf(0),
						i = t.slice(0, e).toString("utf8"),
						a = t.slice(e + 1, r).toString("utf8"),
						n = t.length - (r + 1);
					if (parseInt(a) !== n) throw new p(`Length mismatch: expected ${a} bytes but got ${n} instead.`);
					return { type: i, object: d.from(t.slice(r + 1)) };
				}
			}
			async function tS({ fs: t, gitdir: e, oid: r }) {
				let i = `objects/${r.slice(0, 2)}/${r.slice(2)}`,
					a = await t.read(`${e}/${i}`);
				return a ? { object: a, format: "deflated", source: i } : null;
			}
			function tj(t) {
				let e = 0,
					r = 0,
					i = null;
				do (e |= (127 & (i = t.readUInt8())) << r), (r += 7);
				while (128 & i);
				return e;
			}
			function tR(t, e, r) {
				let i = 0,
					a = 0;
				for (; r--;) 1 & e && (i |= t.readUInt8() << a), (e >>= 1), (a += 8);
				return i;
			}
			function tI(t, e) {
				let r = t.readUInt8();
				if (!(128 & r)) return t.slice(r);
				{
					let i = tR(t, 15 & r, 4),
						a = tR(t, (112 & r) >> 4, 3);
					return 0 === a && (a = 65536), e.slice(i, i + a);
				}
			}
			function tO(t) {
				let e;
				return t[Symbol.asyncIterator]
					? t[Symbol.asyncIterator]()
					: t[Symbol.iterator]
						? t[Symbol.iterator]()
						: t.next
							? t
							: ((e = [t]),
							{
								next: () => Promise.resolve({ done: 0 === e.length, value: e.pop() }),
								return: () => ((e = []), {}),
								[Symbol.asyncIterator]() {
									return this;
								},
							});
			}
			class tP {
				constructor(t) {
					if (void 0 === d) throw Error("Missing Buffer dependency");
					(this.stream = tO(t)), (this.buffer = null), (this.cursor = 0), (this.undoCursor = 0), (this.started = !1), (this._ended = !1), (this._discardedBytes = 0);
				}
				eof() {
					return this._ended && this.cursor === this.buffer.length;
				}
				tell() {
					return this._discardedBytes + this.cursor;
				}
				async byte() {
					if (!this.eof() && (this.started || (await this._init()), this.cursor !== this.buffer.length || (await this._loadnext(), !this._ended))) return this._moveCursor(1), this.buffer[this.undoCursor];
				}
				async chunk() {
					if (!this.eof() && (this.started || (await this._init()), this.cursor !== this.buffer.length || (await this._loadnext(), !this._ended)))
						return this._moveCursor(this.buffer.length), this.buffer.slice(this.undoCursor, this.cursor);
				}
				async read(t) {
					if (!this.eof()) return this.started || (await this._init()), this.cursor + t > this.buffer.length && (this._trim(), await this._accumulate(t)), this._moveCursor(t), this.buffer.slice(this.undoCursor, this.cursor);
				}
				async skip(t) {
					this.eof() || (this.started || (await this._init()), this.cursor + t > this.buffer.length && (this._trim(), await this._accumulate(t)), this._moveCursor(t));
				}
				async undo() {
					this.cursor = this.undoCursor;
				}
				async _next() {
					this.started = !0;
					let { done: t, value: e } = await this.stream.next();
					return t && ((this._ended = !0), !e) ? d.alloc(0) : (e && (e = d.from(e)), e);
				}
				_trim() {
					(this.buffer = this.buffer.slice(this.undoCursor)), (this.cursor -= this.undoCursor), (this._discardedBytes += this.undoCursor), (this.undoCursor = 0);
				}
				_moveCursor(t) {
					(this.undoCursor = this.cursor), (this.cursor += t), this.cursor > this.buffer.length && (this.cursor = this.buffer.length);
				}
				async _accumulate(t) {
					if (this._ended) return;
					let e = [this.buffer];
					for (; this.cursor + t > e.reduce((t, e) => t + e.length, 0);) {
						let t = await this._next();
						if (this._ended) break;
						e.push(t);
					}
					this.buffer = d.concat(e);
				}
				async _loadnext() {
					(this._discardedBytes += this.buffer.length), (this.undoCursor = 0), (this.cursor = 0), (this.buffer = await this._next());
				}
				async _init() {
					this.buffer = await this._next();
				}
			}
			async function tA(t, e) {
				let r = new tP(t),
					i = await r.read(4);
				if ("PACK" !== (i = i.toString("utf8"))) throw new p(`Invalid PACK header '${i}'`);
				let a = await r.read(4);
				if (2 !== (a = a.readUInt32BE(0))) throw new p(`Invalid packfile version: ${a}`);
				let n = await r.read(4);
				if (!((n = n.readUInt32BE(0)) < 1))
					for (; !r.eof() && n--;) {
						let t = r.tell(),
							{ type: i, length: a, ofs: s, reference: c } = await tU(r),
							l = new o.Inflate();
						for (; !l.result;) {
							let o = await r.chunk();
							if (!o) break;
							if ((l.push(o, !1), l.err)) throw new p(`Pako error: ${l.msg}`);
							if (l.result) {
								if (l.result.length !== a) throw new p("Inflated object size is different from that stated in packfile.");
								await r.undo(), await r.read(o.length - l.strm.avail_in);
								let f = r.tell();
								await e({ data: l.result, type: i, num: n, offset: t, end: f, reference: c, ofs: s });
							}
						}
					}
			}
			async function tU(t) {
				let e,
					r,
					i = await t.byte(),
					a = (i >> 4) & 7,
					n = 15 & i;
				if (128 & i) {
					let e = 4;
					do (n |= (127 & (i = await t.byte())) << e), (e += 7);
					while (128 & i);
				}
				if (6 === a) {
					let a = 0;
					e = 0;
					let n = [];
					do (e |= (127 & (i = await t.byte())) << a), (a += 7), n.push(i);
					while (128 & i);
					r = d.from(n);
				}
				return 7 === a && (r = await t.read(20)), { type: a, length: n, ofs: e, reference: r };
			}
			let tC = !1;
			async function tB(t) {
				return (
					null === tC &&
					(tC = (function () {
						try {
							return new DecompressionStream("deflate"), !0;
						} catch (t) { }
						return !1;
					})()),
					tC ? tN(t) : o.inflate(t)
				);
			}
			async function tN(t) {
				let e = new DecompressionStream("deflate"),
					r = new Blob([t]).stream().pipeThrough(e);
				return new Uint8Array(await new Response(r).arrayBuffer());
			}
			class tD {
				constructor(t) {
					Object.assign(this, t), (this.offsetCache = {});
				}
				static async fromIdx({ idx: t, getExternalRefDelta: e }) {
					let r = new y(t);
					if ("ff744f63" !== r.slice(4).toString("hex")) return;
					let i = r.readUInt32BE();
					if (2 !== i) throw new p(`Unable to read version ${i} packfile IDX. (Only version 2 supported)`);
					if (t.byteLength > 2147483648) throw new p("To keep implementation simple, I haven't implemented the layer 5 feature needed to support packfiles > 2GB in size.");
					r.seek(r.tell() + 1020);
					let a = r.readUInt32BE(),
						n = [];
					for (let t = 0; t < a; t++) {
						let e = r.slice(20).toString("hex");
						n[t] = e;
					}
					r.seek(r.tell() + 4 * a);
					let s = new Map();
					for (let t = 0; t < a; t++) s.set(n[t], r.readUInt32BE());
					return new tD({ hashes: n, crcs: {}, offsets: s, packfileSha: r.slice(20).toString("hex"), getExternalRefDelta: e });
				}
				static async fromPack({ pack: t, getExternalRefDelta: e, onProgress: r }) {
					let i = { 1: "commit", 2: "tree", 3: "blob", 4: "tag", 6: "ofs-delta", 7: "ref-delta" },
						a = {},
						n = t.slice(-20).toString("hex"),
						o = [],
						c = {},
						l = new Map(),
						f = null,
						u = null;
					await tA([t], async ({ data: t, type: e, reference: n, offset: s, num: o }) => {
						null === f && (f = o);
						let c = Math.floor(((f - o) * 100) / f);
						c !== u && r && (await r({ phase: "Receiving objects", loaded: f - o, total: f })),
							(u = c),
							["commit", "tree", "blob", "tag"].includes((e = i[e])) ? (a[s] = { type: e, offset: s }) : "ofs-delta" === e ? (a[s] = { type: e, offset: s }) : "ref-delta" === e && (a[s] = { type: e, offset: s });
					});
					let d = Object.keys(a).map(Number);
					for (let [e, r] of d.entries()) {
						let i = e + 1 === d.length ? t.byteLength - 20 : d[e + 1],
							n = a[r],
							o = s.buf(t.slice(r, i)) >>> 0;
						(n.end = i), (n.crc = o);
					}
					let h = new tD({ pack: Promise.resolve(t), packfileSha: n, crcs: c, hashes: o, offsets: l, getExternalRefDelta: e });
					u = null;
					let w = 0,
						m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					for (let t in a) {
						t = Number(t);
						let e = Math.floor((100 * w) / f);
						e !== u && r && (await r({ phase: "Resolving deltas", loaded: w, total: f })), w++, (u = e);
						let i = a[t];
						if (!i.oid)
							try {
								(h.readDepth = 0), (h.externalReadDepth = 0);
								let { type: e, object: r } = await h.readSlice({ start: t });
								m[h.readDepth] += 1;
								let a = await k(tk.wrap({ type: e, object: r }));
								(i.oid = a), o.push(a), l.set(a, t), (c[a] = i.crc);
							} catch (t) {
								continue;
							}
					}
					return o.sort(), h;
				}
				async toBuffer() {
					let t = [],
						e = (e, r) => {
							t.push(d.from(e, r));
						};
					e("ff744f63", "hex"), e("00000002", "hex");
					let r = new y(d.alloc(1024));
					for (let t = 0; t < 256; t++) {
						let e = 0;
						for (let r of this.hashes) parseInt(r.slice(0, 2), 16) <= t && e++;
						r.writeUInt32BE(e);
					}
					for (let i of (t.push(r.buffer), this.hashes)) e(i, "hex");
					let i = new y(d.alloc(4 * this.hashes.length));
					for (let t of this.hashes) i.writeUInt32BE(this.crcs[t]);
					t.push(i.buffer);
					let a = new y(d.alloc(4 * this.hashes.length));
					for (let t of this.hashes) a.writeUInt32BE(this.offsets.get(t));
					t.push(a.buffer), e(this.packfileSha, "hex");
					let n = d.concat(t),
						s = await k(n),
						o = d.alloc(20);
					return o.write(s, "hex"), d.concat([n, o]);
				}
				async load({ pack: t }) {
					this.pack = t;
				}
				async unload() {
					this.pack = null;
				}
				async read({ oid: t }) {
					if (!this.offsets.get(t)) {
						if (this.getExternalRefDelta) return this.externalReadDepth++, this.getExternalRefDelta(t);
						throw new p(`Could not read object ${t} from packfile`);
					}
					let e = this.offsets.get(t);
					return this.readSlice({ start: e });
				}
				async readSlice({ start: t }) {
					if (this.offsetCache[t]) return Object.assign({}, this.offsetCache[t]);
					if ((this.readDepth++, !this.pack)) throw new p("Tried to read from a GitPackIndex with no packfile loaded into memory");
					let e = (await this.pack).slice(t),
						r = new y(e),
						i = r.readUInt8(),
						a = 112 & i,
						n = { 16: "commit", 32: "tree", 48: "blob", 64: "tag", 96: "ofs_delta", 112: "ref_delta" }[a];
					if (void 0 === n) throw new p("Unrecognized type: 0b" + a.toString(2));
					let s = 15 & i,
						o = s;
					128 & i &&
						(o = (function (t, e) {
							let r = e,
								i = 4,
								a = null;
							do (r |= (127 & (a = t.readUInt8())) << i), (i += 7);
							while (128 & a);
							return r;
						})(r, s));
					let c = null,
						l = null;
					if ("ofs_delta" === n) {
						let e =
							t -
							(function (t) {
								let e = [],
									r = 0,
									i = 0;
								do {
									let a = 127 & (r = t.readUInt8());
									e.push(a), (i = 128 & r);
								} while (i);
								return e.reduce((t, e) => ((t + 1) << 7) | e, -1);
							})(r);
						({ object: c, type: n } = await this.readSlice({ start: e }));
					}
					if ("ref_delta" === n) {
						let t = r.slice(20).toString("hex");
						({ object: c, type: n } = await this.read({ oid: t }));
					}
					let f = e.slice(r.tell());
					if ((l = d.from(await tB(f))).byteLength !== o) throw new p(`Packfile told us object would have length ${o} but it had length ${l.byteLength}`);
					return (
						c &&
						(l = d.from(
							(function (t, e) {
								let r;
								let i = new y(t),
									a = tj(i);
								if (a !== e.byteLength) throw new p(`applyDelta expected source buffer to be ${a} bytes but the provided buffer was ${e.length} bytes`);
								let n = tj(i),
									s = tI(i, e);
								if (s.byteLength === n) r = s;
								else {
									let t = new y((r = d.alloc(n)));
									for (t.copy(s); !i.eof();) t.copy(tI(i, e));
									let a = t.tell();
									if (n !== a) throw new p(`applyDelta expected target buffer to be ${n} bytes but the resulting buffer was ${a} bytes`);
								}
								return r;
							})(l, c)
						)),
						this.readDepth > 3 && (this.offsetCache[t] = { type: n, object: l }),
						{ type: n, format: "content", object: l }
					);
				}
			}
			let tM = Symbol("PackfileCache");
			async function tT({ fs: t, filename: e, getExternalRefDelta: r, emitter: i, emitterPrefix: a }) {
				let n = await t.read(e);
				return tD.fromIdx({ idx: n, getExternalRefDelta: r });
			}
			function tH({ fs: t, cache: e, filename: r, getExternalRefDelta: i, emitter: a, emitterPrefix: n }) {
				e[tM] || (e[tM] = new Map());
				let s = e[tM].get(r);
				return s || ((s = tT({ fs: t, filename: r, getExternalRefDelta: i, emitter: a, emitterPrefix: n })), e[tM].set(r, s)), s;
			}
			async function tz({ fs: t, cache: e, gitdir: r, oid: i, format: a = "content", getExternalRefDelta: n }) {
				let s = await t.readdir(J(r, "objects/pack"));
				for (let a of (s = s.filter((t) => t.endsWith(".idx")))) {
					let s = `${r}/objects/pack/${a}`,
						o = await tH({ fs: t, cache: e, filename: s, getExternalRefDelta: n });
					if (o.error) throw new p(o.error);
					if (o.offsets.has(i)) {
						if (!o.pack) {
							let e = s.replace(/idx$/, "pack");
							o.pack = t.read(e);
						}
						let e = await o.read({ oid: i, getExternalRefDelta: n });
						return (e.format = "content"), (e.source = `objects/pack/${a.replace(/idx$/, "pack")}`), e;
					}
				}
				return null;
			}
			async function tW({ fs: t, cache: e, gitdir: r, oid: i, format: a = "content" }) {
				let n;
				if (
					("4b825dc642cb6eb9a060e54bf8d69288fbee4904" === i && (n = { format: "wrapped", object: d.from(`tree 0\0`) }),
						n || (n = await tS({ fs: t, gitdir: r, oid: i })),
						n || (n = await tz({ fs: t, cache: e, gitdir: r, oid: i, getExternalRefDelta: (i) => tW({ fs: t, cache: e, gitdir: r, oid: i }) })),
						!n)
				)
					throw new z(i);
				if ("deflated" === a) return n;
				if (("deflated" === n.format && ((n.object = d.from(await tB(n.object))), (n.format = "wrapped")), "wrapped" === n.format)) {
					if ("wrapped" === a && "wrapped" === n.format) return n;
					let t = await k(n.object);
					if (t !== i) throw new p(`SHA check failed! Expected ${i}, computed ${t}`);
					let { object: e, type: r } = tk.unwrap(n.object);
					(n.type = r), (n.object = e), (n.format = "content");
				}
				if ("content" === n.format) return "content" === a ? n : void 0;
				throw new p(`invalid format "${n.format}"`);
			}
			class tF extends w {
				constructor(t, e, r = !0) {
					super(`Failed to create ${t} at ${e} because it already exists.${r ? ` (Hint: use 'force: true' parameter to overwrite existing ${t}.)` : ""}`),
						(this.code = this.name = tF.code),
						(this.data = { noun: t, where: e, canForce: r });
				}
			}
			tF.code = "AlreadyExistsError";
			class tG extends w {
				constructor(t, e, r) {
					super(`Found multiple ${t} matching "${e}" (${r.join(", ")}). Use a longer abbreviation length to disambiguate them.`), (this.code = this.name = tG.code), (this.data = { nouns: t, short: e, matches: r });
				}
			}
			tG.code = "AmbiguousError";
			class tq extends w {
				constructor(t) {
					super(`Your local changes to the following files would be overwritten by checkout: ${t.join(", ")}`), (this.code = this.name = tq.code), (this.data = { filepaths: t });
				}
			}
			tq.code = "CheckoutConflictError";
			class tL extends w {
				constructor(t, e) {
					super(`Failed to checkout "${t}" because commit ${e} is not available locally. Do a git fetch to make the branch available locally.`), (this.code = this.name = tL.code), (this.data = { ref: t, oid: e });
				}
			}
			tL.code = "CommitNotFetchedError";
			class tV extends w {
				constructor() {
					super("Empty response from git server."), (this.code = this.name = tV.code), (this.data = {});
				}
			}
			tV.code = "EmptyServerResponseError";
			class tK extends w {
				constructor() {
					super("A simple fast-forward merge was not possible."), (this.code = this.name = tK.code), (this.data = {});
				}
			}
			tK.code = "FastForwardError";
			class tZ extends w {
				constructor(t, e) {
					super(`One or more branches were not updated: ${t}`), (this.code = this.name = tZ.code), (this.data = { prettyDetails: t, result: e });
				}
			}
			tZ.code = "GitPushError";
			class tY extends w {
				constructor(t, e, r) {
					super(`HTTP Error: ${t} ${e}`), (this.code = this.name = tY.code), (this.data = { statusCode: t, statusMessage: e, response: r });
				}
			}
			tY.code = "HttpError";
			class tJ extends w {
				constructor(t) {
					let e = "invalid filepath";
					"leading-slash" === t || "trailing-slash" === t
						? (e = '"filepath" parameter should not include leading or trailing directory separators because these can cause problems on some platforms.')
						: "directory" === t && (e = '"filepath" should not be a directory.'),
						super(e),
						(this.code = this.name = tJ.code),
						(this.data = { reason: t });
				}
			}
			tJ.code = "InvalidFilepathError";
			class tX extends w {
				constructor(t, e) {
					super(`"${t}" would be an invalid git reference. (Hint: a valid alternative would be "${e}".)`), (this.code = this.name = tX.code), (this.data = { ref: t, suggestion: e });
				}
			}
			tX.code = "InvalidRefNameError";
			class tQ extends w {
				constructor(t) {
					super(`Maximum search depth of ${t} exceeded.`), (this.code = this.name = tQ.code), (this.data = { depth: t });
				}
			}
			tQ.code = "MaxDepthError";
			class t0 extends w {
				constructor() {
					super("Merges with conflicts are not supported yet."), (this.code = this.name = t0.code), (this.data = {});
				}
			}
			t0.code = "MergeNotSupportedError";
			class t1 extends w {
				constructor(t, e, r, i) {
					super(`Automatic merge failed with one or more merge conflicts in the following files: ${t.toString()}. Fix conflicts then commit the result.`),
						(this.code = this.name = t1.code),
						(this.data = { filepaths: t, bothModified: e, deleteByUs: r, deleteByTheirs: i });
				}
			}
			t1.code = "MergeConflictError";
			class t2 extends w {
				constructor(t) {
					super(`No name was provided for ${t} in the argument or in the .git/config file.`), (this.code = this.name = t2.code), (this.data = { role: t });
				}
			}
			t2.code = "MissingNameError";
			class t8 extends w {
				constructor(t) {
					super(`The function requires a "${t}" parameter but none was provided.`), (this.code = this.name = t8.code), (this.data = { parameter: t });
				}
			}
			t8.code = "MissingParameterError";
			class t4 extends w {
				constructor(t) {
					super('There are multiple errors that were thrown by the method. Please refer to the "errors" property to see more'), (this.code = this.name = t4.code), (this.data = { errors: t }), (this.errors = t);
				}
			}
			t4.code = "MultipleGitError";
			class t6 extends w {
				constructor(t, e) {
					super(`Expected "${t}" but received "${e}".`), (this.code = this.name = t6.code), (this.data = { expected: t, actual: e });
				}
			}
			t6.code = "ParseError";
			class t3 extends w {
				constructor(t) {
					let e = "";
					"not-fast-forward" === t ? (e = " because it was not a simple fast-forward") : "tag-exists" === t && (e = " because tag already exists"),
						super(`Push rejected${e}. Use "force: true" to override.`),
						(this.code = this.name = t3.code),
						(this.data = { reason: t });
				}
			}
			t3.code = "PushRejectedError";
			class t9 extends w {
				constructor(t, e) {
					super(`Remote does not support the "${t}" so the "${e}" parameter cannot be used.`), (this.code = this.name = t9.code), (this.data = { capability: t, parameter: e });
				}
			}
			t9.code = "RemoteCapabilityError";
			class t5 extends w {
				constructor(t, e) {
					super(`Remote did not reply using the "smart" HTTP protocol. Expected "001e# service=git-upload-pack" but received: ${t}`), (this.code = this.name = t5.code), (this.data = { preview: t, response: e });
				}
			}
			t5.code = "SmartHttpError";
			class t7 extends w {
				constructor(t, e, r) {
					super(`Git remote "${t}" uses an unrecognized transport protocol: "${e}"`), (this.code = this.name = t7.code), (this.data = { url: t, transport: e, suggestion: r });
				}
			}
			t7.code = "UnknownTransportError";
			class et extends w {
				constructor(t) {
					super(`Cannot parse remote URL: "${t}"`), (this.code = this.name = et.code), (this.data = { url: t });
				}
			}
			et.code = "UrlParseError";
			class ee extends w {
				constructor() {
					super("The operation was canceled."), (this.code = this.name = ee.code), (this.data = {});
				}
			}
			ee.code = "UserCanceledError";
			class er extends w {
				constructor(t) {
					super(`Could not merge index: Entry for '${t}' is not up to date. Either reset the index entry to HEAD, or stage your unstaged changes.`), (this.code = this.name = er.code), (this.data = { filepath: t });
				}
			}
			er.code = "IndexResetError";
			var ei = Object.freeze({
				__proto__: null,
				AlreadyExistsError: tF,
				AmbiguousError: tG,
				CheckoutConflictError: tq,
				CommitNotFetchedError: tL,
				EmptyServerResponseError: tV,
				FastForwardError: tK,
				GitPushError: tZ,
				HttpError: tY,
				InternalError: p,
				InvalidFilepathError: tJ,
				InvalidOidError: F,
				InvalidRefNameError: tX,
				MaxDepthError: tQ,
				MergeNotSupportedError: t0,
				MergeConflictError: t1,
				MissingNameError: t2,
				MissingParameterError: t8,
				MultipleGitError: t4,
				NoRefspecError: G,
				NotFoundError: z,
				ObjectTypeError: W,
				ParseError: t6,
				PushRejectedError: t3,
				RemoteCapabilityError: t9,
				SmartHttpError: t5,
				UnknownTransportError: t7,
				UnsafeFilepathError: g,
				UrlParseError: et,
				UserCanceledError: ee,
				UnmergedPathsError: m,
				IndexResetError: er,
			});
			function ea({ name: t, email: e, timestamp: r, timezoneOffset: i }) {
				return (
					(i = (function (t) {
						var e, r;
						let i = Math.sign((r = 0 === (e = t) ? e : -e)) || (Object.is(r, -0) ? -1 : 1),
							a = Math.floor((t = Math.abs(t)) / 60);
						t -= 60 * a;
						let n = String(a),
							s = String(t);
						return n.length < 2 && (n = "0" + n), s.length < 2 && (s = "0" + s), (-1 === i ? "-" : "+") + n + s;
					})(i)),
					`${t} <${e}> ${r} ${i}`
				);
			}
			function en(t) {
				return (t = (t = (t = t.replace(/\r/g, "")).replace(/^\n+/, "")).replace(/\n+$/, "") + "\n");
			}
			function es(t) {
				let [, e, r, i, a] = t.match(/^(.*) <(.*)> (.*) (.*)$/);
				return {
					name: e,
					email: r,
					timestamp: Number(i),
					timezoneOffset: (function (t) {
						var e;
						let [, r, i, a] = t.match(/(\+|-)(\d\d)(\d\d)/);
						return 0 == (e = a = ("+" === r ? 1 : -1) * (60 * Number(i) + Number(a))) ? e : -e;
					})(a),
				};
			}
			class eo {
				constructor(t) {
					if ("string" == typeof t) this._tag = t;
					else if (d.isBuffer(t)) this._tag = t.toString("utf8");
					else if ("object" == typeof t) this._tag = eo.render(t);
					else throw new p("invalid type passed to GitAnnotatedTag constructor");
				}
				static from(t) {
					return new eo(t);
				}
				static render(t) {
					return `object ${t.object}
type ${t.type}
tag ${t.tag}
tagger ${ea(t.tagger)}

${t.message}
${t.gpgsig ? t.gpgsig : ""}`;
				}
				justHeaders() {
					return this._tag.slice(0, this._tag.indexOf("\n\n"));
				}
				message() {
					let t = this.withoutSignature();
					return t.slice(t.indexOf("\n\n") + 2);
				}
				parse() {
					return Object.assign(this.headers(), { message: this.message(), gpgsig: this.gpgsig() });
				}
				render() {
					return this._tag;
				}
				headers() {
					let t = this.justHeaders().split("\n"),
						e = [];
					for (let r of t) " " === r[0] ? (e[e.length - 1] += "\n" + r.slice(1)) : e.push(r);
					let r = {};
					for (let t of e) {
						let e = t.slice(0, t.indexOf(" ")),
							i = t.slice(t.indexOf(" ") + 1);
						Array.isArray(r[e]) ? r[e].push(i) : (r[e] = i);
					}
					return r.tagger && (r.tagger = es(r.tagger)), r.committer && (r.committer = es(r.committer)), r;
				}
				withoutSignature() {
					let t = en(this._tag);
					return -1 === t.indexOf("\n-----BEGIN PGP SIGNATURE-----") ? t : t.slice(0, t.lastIndexOf("\n-----BEGIN PGP SIGNATURE-----"));
				}
				gpgsig() {
					if (-1 !== this._tag.indexOf("\n-----BEGIN PGP SIGNATURE-----")) return en(this._tag.slice(this._tag.indexOf("-----BEGIN PGP SIGNATURE-----"), this._tag.indexOf("-----END PGP SIGNATURE-----") + 27));
				}
				payload() {
					return this.withoutSignature() + "\n";
				}
				toObject() {
					return d.from(this._tag, "utf8");
				}
				static async sign(t, e, r) {
					let i = t.payload(),
						{ signature: a } = await e({ payload: i, secretKey: r }),
						n = i + (a = en(a));
					return eo.from(n);
				}
			}
			function ec(t) {
				return (
					t
						.trim()
						.split("\n")
						.map((t) => " " + t)
						.join("\n") + "\n"
				);
			}
			class el {
				constructor(t) {
					if ("string" == typeof t) this._commit = t;
					else if (d.isBuffer(t)) this._commit = t.toString("utf8");
					else if ("object" == typeof t) this._commit = el.render(t);
					else throw new p("invalid type passed to GitCommit constructor");
				}
				static fromPayloadSignature({ payload: t, signature: e }) {
					let r = el.justHeaders(t),
						i = el.justMessage(t);
					return new el(en(r + "\ngpgsig" + ec(e) + "\n" + i));
				}
				static from(t) {
					return new el(t);
				}
				toObject() {
					return d.from(this._commit, "utf8");
				}
				headers() {
					return this.parseHeaders();
				}
				message() {
					return el.justMessage(this._commit);
				}
				parse() {
					return Object.assign({ message: this.message() }, this.headers());
				}
				static justMessage(t) {
					return en(t.slice(t.indexOf("\n\n") + 2));
				}
				static justHeaders(t) {
					return t.slice(0, t.indexOf("\n\n"));
				}
				parseHeaders() {
					let t = el.justHeaders(this._commit).split("\n"),
						e = [];
					for (let r of t) " " === r[0] ? (e[e.length - 1] += "\n" + r.slice(1)) : e.push(r);
					let r = { parent: [] };
					for (let t of e) {
						let e = t.slice(0, t.indexOf(" ")),
							i = t.slice(t.indexOf(" ") + 1);
						Array.isArray(r[e]) ? r[e].push(i) : (r[e] = i);
					}
					return r.author && (r.author = es(r.author)), r.committer && (r.committer = es(r.committer)), r;
				}
				static renderHeaders(t) {
					let e = "";
					if (
						(t.tree
							? (e += `tree ${t.tree}
`)
							: (e += `tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904
`),
							t.parent)
					) {
						if (void 0 === t.parent.length) throw new p("commit 'parent' property should be an array");
						for (let r of t.parent)
							e += `parent ${r}
`;
					}
					let r = t.author;
					e += `author ${ea(r)}
`;
					let i = t.committer || t.author;
					return (
						(e += `committer ${ea(i)}
`),
						t.gpgsig && (e += "gpgsig" + ec(t.gpgsig)),
						e
					);
				}
				static render(t) {
					return el.renderHeaders(t) + "\n" + en(t.message);
				}
				render() {
					return this._commit;
				}
				withoutSignature() {
					let t = en(this._commit);
					return -1 === t.indexOf("\ngpgsig") ? t : en(t.slice(0, t.indexOf("\ngpgsig")) + "\n" + t.slice(t.indexOf("-----END PGP SIGNATURE-----\n") + 28));
				}
				isolateSignature() {
					return this._commit
						.slice(this._commit.indexOf("-----BEGIN PGP SIGNATURE-----"), this._commit.indexOf("-----END PGP SIGNATURE-----") + 27)
						.split("\n")
						.map((t) => t.replace(/^ /, ""))
						.join("\n");
				}
				static async sign(t, e, r) {
					let i = t.withoutSignature(),
						a = el.justMessage(t._commit),
						{ signature: n } = await e({ payload: i, secretKey: r });
					n = en(n);
					let s = el.justHeaders(t._commit) + "\ngpgsig" + ec(n) + "\n" + a;
					return el.from(s);
				}
			}
			async function ef({ fs: t, cache: e, gitdir: r, oid: i }) {
				if ("4b825dc642cb6eb9a060e54bf8d69288fbee4904" === i) return { tree: tE.from([]), oid: i };
				let { type: a, object: n } = await tW({ fs: t, cache: e, gitdir: r, oid: i });
				if ("tag" === a) return ef({ fs: t, cache: e, gitdir: r, oid: (i = eo.from(n).parse().object) });
				if ("commit" === a) return ef({ fs: t, cache: e, gitdir: r, oid: (i = el.from(n).parse().tree) });
				if ("tree" !== a) throw new W(i, a, "tree");
				return { tree: tE.from(n), oid: i };
			}
			class eu {
				constructor({ fs: t, gitdir: e, ref: r, cache: i }) {
					(this.fs = t),
						(this.cache = i),
						(this.gitdir = e),
						(this.mapPromise = (async () => {
							let i;
							let a = new Map();
							try {
								i = await tb.resolve({ fs: t, gitdir: e, ref: r });
							} catch (t) {
								t instanceof z && (i = "4b825dc642cb6eb9a060e54bf8d69288fbee4904");
							}
							let n = await ef({ fs: t, cache: this.cache, gitdir: e, oid: i });
							return (n.type = "tree"), (n.mode = "40000"), a.set(".", n), a;
						})());
					let a = this;
					this.ConstructEntry = class {
						constructor(t) {
							(this._fullpath = t), (this._type = !1), (this._mode = !1), (this._stat = !1), (this._content = !1), (this._oid = !1);
						}
						async type() {
							return a.type(this);
						}
						async mode() {
							return a.mode(this);
						}
						async stat() {
							return a.stat(this);
						}
						async content() {
							return a.content(this);
						}
						async oid() {
							return a.oid(this);
						}
					};
				}
				async readdir(t) {
					let e = t._fullpath,
						{ fs: r, cache: i, gitdir: a } = this,
						n = await this.mapPromise,
						s = n.get(e);
					if (!s) throw Error(`No obj for ${e}`);
					let o = s.oid;
					if (!o) throw Error(`No oid for obj ${JSON.stringify(s)}`);
					if ("tree" !== s.type) return null;
					let { type: c, object: l } = await tW({ fs: r, cache: i, gitdir: a, oid: o });
					if (c !== s.type) throw new W(o, c, s.type);
					let f = tE.from(l);
					for (let t of f) n.set(J(e, t.path), t);
					return f.entries().map((t) => J(e, t.path));
				}
				async type(t) {
					if (!1 === t._type) {
						let { type: e } = (await this.mapPromise).get(t._fullpath);
						t._type = e;
					}
					return t._type;
				}
				async mode(t) {
					if (!1 === t._mode) {
						let { mode: e } = (await this.mapPromise).get(t._fullpath);
						t._mode = _(parseInt(e, 8));
					}
					return t._mode;
				}
				async stat(t) { }
				async content(t) {
					if (!1 === t._content) {
						let e = await this.mapPromise,
							{ fs: r, cache: i, gitdir: a } = this,
							n = e.get(t._fullpath).oid,
							{ type: s, object: o } = await tW({ fs: r, cache: i, gitdir: a, oid: n });
						"blob" !== s ? (t._content = void 0) : (t._content = new Uint8Array(o));
					}
					return t._content;
				}
				async oid(t) {
					if (!1 === t._oid) {
						let e = (await this.mapPromise).get(t._fullpath);
						t._oid = e.oid;
					}
					return t._oid;
				}
			}
			function ed({ ref: t = "HEAD" } = {}) {
				let e = Object.create(null);
				return (
					Object.defineProperty(e, T, {
						value: function ({ fs: e, gitdir: r, cache: i }) {
							return new eu({ fs: e, gitdir: r, ref: t, cache: i });
						},
					}),
					Object.freeze(e),
					e
				);
			}
			class eh {
				constructor({ fs: t, dir: e, gitdir: r, cache: i }) {
					(this.fs = t), (this.cache = i), (this.dir = e), (this.gitdir = r);
					let a = this;
					this.ConstructEntry = class {
						constructor(t) {
							(this._fullpath = t), (this._type = !1), (this._mode = !1), (this._stat = !1), (this._content = !1), (this._oid = !1);
						}
						async type() {
							return a.type(this);
						}
						async mode() {
							return a.mode(this);
						}
						async stat() {
							return a.stat(this);
						}
						async content() {
							return a.content(this);
						}
						async oid() {
							return a.oid(this);
						}
					};
				}
				async readdir(t) {
					let e = t._fullpath,
						{ fs: r, dir: i } = this,
						a = await r.readdir(J(i, e));
					return null === a ? null : a.map((t) => J(e, t));
				}
				async type(t) {
					return !1 === t._type && (await t.stat()), t._type;
				}
				async mode(t) {
					return !1 === t._mode && (await t.stat()), t._mode;
				}
				async stat(t) {
					if (!1 === t._stat) {
						let { fs: e, dir: r } = this,
							i = await e.lstat(`${r}/${t._fullpath}`);
						if (!i) throw Error(`ENOENT: no such file or directory, lstat '${t._fullpath}'`);
						let a = i.isDirectory() ? "tree" : "blob";
						"blob" !== a || i.isFile() || i.isSymbolicLink() || (a = "special"), (t._type = a), (i = x(i)), (t._mode = i.mode), -1 === i.size && t._actualSize && (i.size = t._actualSize), (t._stat = i);
					}
					return t._stat;
				}
				async content(t) {
					if (!1 === t._content) {
						let { fs: e, dir: r, gitdir: i } = this;
						if ((await t.type()) === "tree") t._content = void 0;
						else {
							let a = await tm.get({ fs: e, gitdir: i }),
								n = await a.get("core.autocrlf"),
								s = await e.read(`${r}/${t._fullpath}`, { autocrlf: n });
							(t._actualSize = s.length), t._stat && -1 === t._stat.size && (t._stat.size = t._actualSize), (t._content = new Uint8Array(s));
						}
					}
					return t._content;
				}
				async oid(t) {
					if (!1 === t._oid) {
						let e;
						let { fs: r, gitdir: i, cache: a } = this;
						await C.acquire({ fs: r, gitdir: i, cache: a }, async function (a) {
							let n = a.entriesMap.get(t._fullpath),
								s = await t.stat(),
								o = await tm.get({ fs: r, gitdir: i }),
								c = await o.get("core.filemode"),
								l = "win32" !== h.platform;
							!n || I(s, n, c, l)
								? void 0 === (await t.content())
									? (e = void 0)
									: ((e = await k(tk.wrap({ type: "blob", object: await t.content() }))), n && e === n.oid && (!c || s.mode === n.mode) && I(s, n, c, l) && a.insert({ filepath: t._fullpath, stats: s, oid: e }))
								: (e = n.oid);
						}),
							(t._oid = e);
					}
					return t._oid;
				}
			}
			function ew() {
				let t = Object.create(null);
				return (
					Object.defineProperty(t, T, {
						value: function ({ fs: t, dir: e, gitdir: r, cache: i }) {
							return new eh({ fs: t, dir: e, gitdir: r, cache: i });
						},
					}),
					Object.freeze(t),
					t
				);
			}
			let em = void 0 === Array.prototype.flat ? (t) => t.reduce((t, e) => t.concat(e), []) : (t) => t.flat();
			class ep {
				constructor() {
					this.value = null;
				}
				consider(t) {
					null != t && (null === this.value ? (this.value = t) : t < this.value && (this.value = t));
				}
				reset() {
					this.value = null;
				}
			}
			async function eg({
				fs: t,
				cache: e,
				dir: r,
				gitdir: i,
				trees: a,
				map: n = async (t, e) => e,
				reduce: s = async (t, e) => {
					let r = em(e);
					return void 0 !== t && r.unshift(t), r;
				},
				iterate: o = (t, e) => Promise.all([...e].map(t)),
			}) {
				let c = a.map((a) => a[T]({ fs: t, dir: r, gitdir: i, cache: e })),
					l = Array(c.length).fill("."),
					f = Array.from({ length: c.length - 0 }, (t, e) => 0 + e),
					u = async (t) => {
						f.map((e) => {
							t[e] = t[e] && new c[e].ConstructEntry(t[e]);
						});
						let e = (await Promise.all(f.map((e) => (t[e] ? c[e].readdir(t[e]) : [])))).map((t) => (null === t ? [] : t)).map((t) => t[Symbol.iterator]());
						return {
							entries: t,
							children: (function* (t) {
								let e;
								let r = new ep(),
									i = [],
									a = t.length;
								for (let e = 0; e < a; e++) (i[e] = t[e].next().value), void 0 !== i[e] && r.consider(i[e]);
								if (null !== r.value)
									for (; ;) {
										let n = [];
										(e = r.value), r.reset();
										for (let s = 0; s < a; s++) void 0 !== i[s] && i[s] === e ? ((n[s] = i[s]), (i[s] = t[s].next().value)) : (n[s] = null), void 0 !== i[s] && r.consider(i[s]);
										if ((yield n, null === r.value)) return;
									}
							})(e),
						};
					},
					d = async (t) => {
						let { entries: e, children: r } = await u(t),
							i = e.find((t) => t && t._fullpath)._fullpath,
							a = await n(i, e);
						if (null !== a) {
							let t = await o(d, r);
							return s(a, (t = t.filter((t) => void 0 !== t)));
						}
					};
				return d(l);
			}
			async function ey(t, e) {
				let r = await t.readdir(e);
				null == r
					? await t.rm(e)
					: r.length
						? await Promise.all(
							r.map((r) => {
								let i = J(e, r);
								return t.lstat(i).then((e) => {
									if (e) return e.isDirectory() ? ey(t, i) : t.rm(i);
								});
							})
						).then(() => t.rmdir(e))
						: await t.rmdir(e);
			}
			function eb(t) {
				return "function" == typeof t;
			}
			function e$(t) {
				var e, r;
				return (
					(r = e = ((t) => {
						try {
							return t.readFile().catch((t) => t);
						} catch (t) {
							return t;
						}
					})(t)) &&
					"object" == typeof r &&
					eb(e.then) &&
					eb(e.catch)
				);
			}
			let e_ = ["readFile", "writeFile", "mkdir", "rmdir", "unlink", "stat", "lstat", "readdir", "readlink", "symlink"];
			function ev(t, e) {
				if (e$(e)) for (let r of e_) t[`_${r}`] = e[r].bind(e);
				else for (let r of e_) t[`_${r}`] = c(e[r].bind(e));
				e$(e)
					? e.rm
						? (t._rm = e.rm.bind(e))
						: e.rmdir.length > 1
							? (t._rm = e.rmdir.bind(e))
							: (t._rm = ey.bind(null, t))
					: e.rm
						? (t._rm = c(e.rm.bind(e)))
						: e.rmdir.length > 2
							? (t._rm = c(e.rmdir.bind(e)))
							: (t._rm = ey.bind(null, t));
			}
			class ex {
				constructor(t) {
					if (void 0 !== t._original_unwrapped_fs) return t;
					let e = Object.getOwnPropertyDescriptor(t, "promises");
					e && e.enumerable ? ev(this, t.promises) : ev(this, t), (this._original_unwrapped_fs = t);
				}
				async exists(t, e = {}) {
					try {
						return await this._stat(t), !0;
					} catch (t) {
						if ("ENOENT" === t.code || "ENOTDIR" === t.code) return !1;
						throw (console.log('Unhandled error in "FileSystem.exists()" function', t), t);
					}
				}
				async read(t, e = {}) {
					try {
						let r = await this._readFile(t, e);
						if ("true" === e.autocrlf)
							try {
								(r = (r = new TextDecoder("utf8", { fatal: !0 }).decode(r)).replace(/\r\n/g, "\n")), (r = new TextEncoder().encode(r));
							} catch (t) { }
						return "string" != typeof r && (r = d.from(r)), r;
					} catch (t) {
						return null;
					}
				}
				async write(t, e, r = {}) {
					try {
						await this._writeFile(t, e, r);
						return;
					} catch (i) {
						await this.mkdir(N(t)), await this._writeFile(t, e, r);
					}
				}
				async mkdir(t, e = !1) {
					try {
						await this._mkdir(t);
						return;
					} catch (r) {
						if (null === r || "EEXIST" === r.code) return;
						if (e) throw r;
						if ("ENOENT" === r.code) {
							let e = N(t);
							if ("." === e || "/" === e || e === t) throw r;
							await this.mkdir(e), await this.mkdir(t, !0);
						}
					}
				}
				async rm(t) {
					try {
						await this._unlink(t);
					} catch (t) {
						if ("ENOENT" !== t.code) throw t;
					}
				}
				async rmdir(t, e) {
					try {
						e && e.recursive ? await this._rm(t, e) : await this._rmdir(t);
					} catch (t) {
						if ("ENOENT" !== t.code) throw t;
					}
				}
				async readdir(t) {
					try {
						let e = await this._readdir(t);
						return e.sort(b), e;
					} catch (t) {
						if ("ENOTDIR" === t.code) return null;
						return [];
					}
				}
				async readdirDeep(t) {
					let e = await this._readdir(t);
					return (
						await Promise.all(
							e.map(async (e) => {
								let r = t + "/" + e;
								return (await this._stat(r)).isDirectory() ? this.readdirDeep(r) : r;
							})
						)
					).reduce((t, e) => t.concat(e), []);
				}
				async lstat(t) {
					try {
						return await this._lstat(t);
					} catch (t) {
						if ("ENOENT" === t.code) return null;
						throw t;
					}
				}
				async readlink(t, e = { encoding: "buffer" }) {
					try {
						let r = await this._readlink(t, e);
						return d.isBuffer(r) ? r : d.from(r);
					} catch (t) {
						if ("ENOENT" === t.code) return null;
						throw t;
					}
				}
				async writelink(t, e) {
					return this._symlink(e.toString("utf8"), t);
				}
			}
			function eE(t, e) {
				if (void 0 === e) throw new t8(t);
			}
			async function ek(t, e) {
				return (
					(!!t || !!e) &&
					((!!t && !e) || (!t && !!e) || (((await t.type()) !== "tree" || (await e.type()) !== "tree") && ((await t.type()) !== (await e.type()) || (await t.mode()) !== (await e.mode()) || (await t.oid()) !== (await e.oid()))))
				);
			}
			async function eS({ fs: t, dir: e, gitdir: r = J(e, ".git"), commit: i = "HEAD", cache: a = {} }) {
				try {
					eE("fs", t), eE("dir", e), eE("gitdir", r);
					let n = new ex(t),
						s = [ed({ ref: i }), ew(), H()],
						o = [];
					await C.acquire({ fs: n, gitdir: r, cache: a }, async function (t) {
						o = t.unmergedPaths;
					});
					let c = await eg({
						fs: n,
						cache: a,
						dir: e,
						gitdir: r,
						trees: s,
						map: async function (t, [e, r, i]) {
							let a = !(await ek(r, i)),
								n = o.includes(t),
								s = !(await ek(i, e));
							if (a || n) return e ? { path: t, mode: await e.mode(), oid: await e.oid(), type: await e.type(), content: await e.content() } : void 0;
							if (s) return !1;
							throw new er(t);
						},
					});
					await C.acquire({ fs: n, gitdir: r, cache: a }, async function (t) {
						for (let r of c)
							if (!1 !== r) {
								if (!r) {
									await n.rmdir(`${e}/${r.path}`, { recursive: !0 }), t.delete({ filepath: r.path });
									continue;
								}
								if ("blob" === r.type) {
									let i = new TextDecoder().decode(r.content);
									await n.write(`${e}/${r.path}`, i, { mode: r.mode }), t.insert({ filepath: r.path, oid: r.oid, stage: 0 });
								}
							}
					});
				} catch (t) {
					throw ((t.caller = "git.abortMerge"), t);
				}
			}
			class ej {
				static async isIgnored({ fs: t, dir: e, gitdir: r = J(e, ".git"), filepath: i }) {
					if (".git" === B(i)) return !0;
					if ("." === i) return !1;
					let a = "",
						n = J(r, "info", "exclude");
					(await t.exists(n)) && (a = await t.read(n, "utf8"));
					let s = [{ gitignore: J(e, ".gitignore"), filepath: i }],
						o = i.split("/").filter(Boolean);
					for (let t = 1; t < o.length; t++) {
						let r = o.slice(0, t).join("/"),
							i = o.slice(t).join("/");
						s.push({ gitignore: J(e, r, ".gitignore"), filepath: i });
					}
					let c = !1;
					for (let e of s) {
						let r;
						try {
							r = await t.read(e.gitignore, "utf8");
						} catch (t) {
							if ("NOENT" === t.code) continue;
						}
						let i = l().add(a);
						i.add(r);
						let n = N(e.filepath);
						if ("." !== n && i.ignores(n)) return !0;
						c = c ? !i.test(e.filepath).unignored : i.test(e.filepath).ignored;
					}
					return c;
				}
			}
			async function eR({ fs: t, gitdir: e, object: r, format: i, oid: a }) {
				if ("deflated" !== i) throw new p("GitObjectStoreLoose expects objects to write to be in deflated format");
				let n = `objects/${a.slice(0, 2)}/${a.slice(2)}`,
					s = `${e}/${n}`;
				(await t.exists(s)) || (await t.write(s, r));
			}
			let eI = null;
			async function eO(t) {
				return (
					null === eI &&
					(eI = (function () {
						try {
							return new CompressionStream("deflate").writable.close(), new Blob([]).stream().cancel(), !0;
						} catch (t) {
							return !1;
						}
					})()),
					eI ? eP(t) : o.deflate(t)
				);
			}
			async function eP(t) {
				let e = new CompressionStream("deflate"),
					r = new Blob([t]).stream().pipeThrough(e);
				return new Uint8Array(await new Response(r).arrayBuffer());
			}
			async function eA({ fs: t, gitdir: e, type: r, object: i, format: a = "content", oid: n, dryRun: s = !1 }) {
				return "deflated" !== a && ("wrapped" !== a && (i = tk.wrap({ type: r, object: i })), (n = await k(i)), (i = d.from(await eO(i)))), s || (await eR({ fs: t, gitdir: e, object: i, format: "deflated", oid: n })), n;
			}
			function eU(t) {
				let e;
				for (; ~(e = t.indexOf(92));) t[e] = 47;
				return t;
			}
			async function eC({ fs: t, dir: e, gitdir: r = J(e, ".git"), filepath: i, cache: a = {}, force: n = !1, parallel: s = !0 }) {
				try {
					eE("fs", t), eE("dir", e), eE("gitdir", r), eE("filepath", i);
					let o = new ex(t);
					await C.acquire({ fs: o, gitdir: r, cache: a }, async (t) => eB({ dir: e, gitdir: r, fs: o, filepath: i, index: t, force: n, parallel: s }));
				} catch (t) {
					throw ((t.caller = "git.add"), t);
				}
			}
			async function eB({ dir: t, gitdir: e, fs: r, filepath: i, index: a, force: n, parallel: s }) {
				let o = (i = Array.isArray(i) ? i : [i]).map(async (i) => {
					if (!n && (await ej.isIgnored({ fs: r, dir: t, gitdir: e, filepath: i }))) return;
					let o = await r.lstat(J(t, i));
					if (!o) throw new z(i);
					if (o.isDirectory()) {
						let o = await r.readdir(J(t, i));
						if (s) {
							let c = o.map((o) => eB({ dir: t, gitdir: e, fs: r, filepath: [J(i, o)], index: a, force: n, parallel: s }));
							await Promise.all(c);
						} else for (let c of o) await eB({ dir: t, gitdir: e, fs: r, filepath: [J(i, c)], index: a, force: n, parallel: s });
					} else {
						let n = await tm.get({ fs: r, gitdir: e }),
							s = await n.get("core.autocrlf"),
							c = o.isSymbolicLink() ? await r.readlink(J(t, i)).then(eU) : await r.read(J(t, i), { autocrlf: s });
						if (null === c) throw new z(i);
						let l = await eA({ fs: r, gitdir: e, type: "blob", object: c });
						a.insert({ filepath: i, stats: o, oid: l });
					}
				}),
					c = await Promise.allSettled(o),
					l = c.filter((t) => "rejected" === t.status).map((t) => t.reason);
				if (l.length > 1) throw new t4(l);
				if (1 === l.length) throw l[0];
				return c.filter((t) => "fulfilled" === t.status && t.value).map((t) => t.value);
			}
			async function eN({ fs: t, cache: e, onSign: r, gitdir: i, message: a, author: n, committer: s, signingKey: o, dryRun: c = !1, noUpdateBranch: l = !1, ref: f, parent: u, tree: d }) {
				return (
					f || (f = await tb.resolve({ fs: t, gitdir: i, ref: "HEAD", depth: 2 })),
					C.acquire({ fs: t, gitdir: i, cache: e, allowUnmerged: !1 }, async function (e) {
						let h = D(e.entries).get(".");
						if ((d || (d = await eD({ fs: t, gitdir: i, inode: h, dryRun: c })), u)) u = await Promise.all(u.map((e) => tb.resolve({ fs: t, gitdir: i, ref: e })));
						else
							try {
								u = [await tb.resolve({ fs: t, gitdir: i, ref: f })];
							} catch (t) {
								u = [];
							}
						let w = el.from({ tree: d, parent: u, author: n, committer: s, message: a });
						o && (w = await el.sign(w, r, o));
						let m = await eA({ fs: t, gitdir: i, type: "commit", object: w.toObject(), dryRun: c });
						return l || c || (await tb.writeRef({ fs: t, gitdir: i, ref: f, value: m })), m;
					})
				);
			}
			async function eD({ fs: t, gitdir: e, inode: r, dryRun: i }) {
				let a = r.children;
				for (let r of a) "tree" === r.type && ((r.metadata.mode = "040000"), (r.metadata.oid = await eD({ fs: t, gitdir: e, inode: r, dryRun: i })));
				let n = a.map((t) => ({ mode: t.metadata.mode, path: t.basename, oid: t.metadata.oid, type: t.type })),
					s = tE.from(n);
				return await eA({ fs: t, gitdir: e, type: "tree", object: s.toObject(), dryRun: i });
			}
			async function eM({ fs: t, cache: e, gitdir: r, oid: i, filepath: a }) {
				if (a.startsWith("/")) throw new tJ("leading-slash");
				if (a.endsWith("/")) throw new tJ("trailing-slash");
				let n = i,
					s = await ef({ fs: t, cache: e, gitdir: r, oid: i }),
					o = s.tree;
				if ("" === a) i = s.oid;
				else {
					let s = a.split("/");
					i = await eT({ fs: t, cache: e, gitdir: r, tree: o, pathArray: s, oid: n, filepath: a });
				}
				return i;
			}
			async function eT({ fs: t, cache: e, gitdir: r, tree: i, pathArray: a, oid: n, filepath: s }) {
				let o = a.shift();
				for (let c of i)
					if (c.path === o) {
						if (0 === a.length) return c.oid;
						{
							let { type: o, object: l } = await tW({ fs: t, cache: e, gitdir: r, oid: c.oid });
							if ("tree" !== o) throw new W(n, o, "tree", s);
							return eT({ fs: t, cache: e, gitdir: r, tree: (i = tE.from(l)), pathArray: a, oid: n, filepath: s });
						}
					}
				throw new z(`file or directory found at "${n}:${s}"`);
			}
			async function eH({ fs: t, cache: e, gitdir: r, oid: i, filepath: a }) {
				void 0 !== a && (i = await eM({ fs: t, cache: e, gitdir: r, oid: i, filepath: a }));
				let { tree: n, oid: s } = await ef({ fs: t, cache: e, gitdir: r, oid: i });
				return { oid: s, tree: n.entries() };
			}
			async function ez({ fs: t, gitdir: e, tree: r }) {
				let i = tE.from(r).toObject();
				return await eA({ fs: t, gitdir: e, type: "tree", object: i, format: "content" });
			}
			async function eW({ fs: t, cache: e, onSign: r, gitdir: i, ref: a, oid: n, note: s, force: o, author: c, committer: l, signingKey: f }) {
				let u;
				try {
					u = await tb.resolve({ gitdir: i, fs: t, ref: a });
				} catch (t) {
					if (!(t instanceof z)) throw t;
				}
				let h = (await eH({ fs: t, cache: e, gitdir: i, oid: u || "4b825dc642cb6eb9a060e54bf8d69288fbee4904" })).tree;
				if (o) h = h.filter((t) => t.path !== n);
				else for (let t of h) if (t.path === n) throw new tF("note", n);
				"string" == typeof s && (s = d.from(s, "utf8"));
				let w = await eA({ fs: t, gitdir: i, type: "blob", object: s, format: "content" });
				h.push({ mode: "100644", path: n, oid: w, type: "blob" });
				let m = await ez({ fs: t, gitdir: i, tree: h });
				return await eN({
					fs: t,
					cache: e,
					onSign: r,
					gitdir: i,
					ref: a,
					tree: m,
					parent: u && [u],
					message: `Note added by 'isomorphic-git addNote'
`,
					author: c,
					committer: l,
					signingKey: f,
				});
			}
			async function eF({ fs: t, gitdir: e, path: r }) {
				return (await tm.get({ fs: t, gitdir: e })).get(r);
			}
			async function eG({ fs: t, gitdir: e, author: r = {} }) {
				let { name: i, email: a, timestamp: n, timezoneOffset: s } = r;
				if (((i = i || (await eF({ fs: t, gitdir: e, path: "user.name" }))), (a = a || (await eF({ fs: t, gitdir: e, path: "user.email" })) || ""), void 0 !== i))
					return (n = null != n ? n : Math.floor(Date.now() / 1e3)), (s = null != s ? s : new Date(1e3 * n).getTimezoneOffset()), { name: i, email: a, timestamp: n, timezoneOffset: s };
			}
			async function eq({ fs: t, gitdir: e, author: r, committer: i }) {
				return (i = Object.assign({}, i || r)), r && ((i.timestamp = i.timestamp || r.timestamp), (i.timezoneOffset = i.timezoneOffset || r.timezoneOffset)), (i = await eG({ fs: t, gitdir: e, author: i }));
			}
			async function eL({ fs: t, onSign: e, dir: r, gitdir: i = J(r, ".git"), ref: a = "refs/notes/commits", oid: n, note: s, force: o, author: c, committer: l, signingKey: f, cache: u = {} }) {
				try {
					eE("fs", t), eE("gitdir", i), eE("oid", n), eE("note", s), f && eE("onSign", e);
					let r = new ex(t),
						d = await eG({ fs: r, gitdir: i, author: c });
					if (!d) throw new t2("author");
					let h = await eq({ fs: r, gitdir: i, author: d, committer: l });
					if (!h) throw new t2("committer");
					return await eW({ fs: new ex(r), cache: u, onSign: e, gitdir: i, ref: a, oid: n, note: s, force: o, author: d, committer: h, signingKey: f });
				} catch (t) {
					throw ((t.caller = "git.addNote"), t);
				}
			}
			async function eV({ fs: t, gitdir: e, remote: r, url: i, force: a }) {
				if (r !== f.clean(r)) throw new tX(r, f.clean(r));
				let n = await tm.get({ fs: t, gitdir: e });
				if (!a && (await n.getSubsections("remote")).includes(r) && i !== (await n.get(`remote.${r}.url`))) throw new tF("remote", r);
				await n.set(`remote.${r}.url`, i), await n.set(`remote.${r}.fetch`, `+refs/heads/*:refs/remotes/${r}/*`), await tm.save({ fs: t, gitdir: e, config: n });
			}
			async function eK({ fs: t, dir: e, gitdir: r = J(e, ".git"), remote: i, url: a, force: n = !1 }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("remote", i), eE("url", a), await eV({ fs: new ex(t), gitdir: r, remote: i, url: a, force: n });
				} catch (t) {
					throw ((t.caller = "git.addRemote"), t);
				}
			}
			async function eZ({ fs: t, cache: e, onSign: r, gitdir: i, ref: a, tagger: n, message: s = a, gpgsig: o, object: c, signingKey: l, force: f = !1 }) {
				if (((a = a.startsWith("refs/tags/") ? a : `refs/tags/${a}`), !f && (await tb.exists({ fs: t, gitdir: i, ref: a })))) throw new tF("tag", a);
				let u = await tb.resolve({ fs: t, gitdir: i, ref: c || "HEAD" }),
					{ type: d } = await tW({ fs: t, cache: e, gitdir: i, oid: u }),
					h = eo.from({ object: u, type: d, tag: a.replace("refs/tags/", ""), tagger: n, message: s, gpgsig: o });
				l && (h = await eo.sign(h, r, l));
				let w = await eA({ fs: t, gitdir: i, type: "tag", object: h.toObject() });
				await tb.writeRef({ fs: t, gitdir: i, ref: a, value: w });
			}
			async function eY({ fs: t, onSign: e, dir: r, gitdir: i = J(r, ".git"), ref: a, tagger: n, message: s = a, gpgsig: o, object: c, signingKey: l, force: f = !1, cache: u = {} }) {
				try {
					eE("fs", t), eE("gitdir", i), eE("ref", a), l && eE("onSign", e);
					let r = new ex(t),
						d = await eG({ fs: r, gitdir: i, author: n });
					if (!d) throw new t2("tagger");
					return await eZ({ fs: r, cache: u, onSign: e, gitdir: i, ref: a, tagger: d, message: s, gpgsig: o, object: c, signingKey: l, force: f });
				} catch (t) {
					throw ((t.caller = "git.annotatedTag"), t);
				}
			}
			async function eJ({ fs: t, gitdir: e, ref: r, object: i, checkout: a = !1, force: n = !1 }) {
				let s;
				if (r !== f.clean(r)) throw new tX(r, f.clean(r));
				let o = `refs/heads/${r}`;
				if (!n && (await tb.exists({ fs: t, gitdir: e, ref: o }))) throw new tF("branch", r, !1);
				try {
					s = await tb.resolve({ fs: t, gitdir: e, ref: i || "HEAD" });
				} catch (t) { }
				s && (await tb.writeRef({ fs: t, gitdir: e, ref: o, value: s })), a && (await tb.writeSymbolicRef({ fs: t, gitdir: e, ref: "HEAD", value: o }));
			}
			async function eX({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i, object: a, checkout: n = !1, force: s = !1 }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("ref", i), await eJ({ fs: new ex(t), gitdir: r, ref: i, object: a, checkout: n, force: s });
				} catch (t) {
					throw ((t.caller = "git.branch"), t);
				}
			}
			let eQ = (t, e) => "." === t || null == e || 0 === e.length || "." === e || (e.length >= t.length ? e.startsWith(t) : t.startsWith(e));
			async function e0({ fs: t, cache: e, onProgress: r, dir: i, gitdir: a, remote: n, ref: s, filepaths: o, noCheckout: c, noUpdateHead: l, dryRun: f, force: u, track: d = !0 }) {
				let h;
				try {
					h = await tb.resolve({ fs: t, gitdir: a, ref: s });
				} catch (r) {
					if ("HEAD" === s) throw r;
					let e = `${n}/${s}`;
					if (((h = await tb.resolve({ fs: t, gitdir: a, ref: e })), d)) {
						let e = await tm.get({ fs: t, gitdir: a });
						await e.set(`branch.${s}.remote`, n), await e.set(`branch.${s}.merge`, `refs/heads/${s}`), await tm.save({ fs: t, gitdir: a, config: e });
					}
					await tb.writeRef({ fs: t, gitdir: a, ref: `refs/heads/${s}`, value: h });
				}
				if (!c) {
					let n;
					try {
						n = await e1({ fs: t, cache: e, onProgress: r, dir: i, gitdir: a, ref: s, force: u, filepaths: o });
					} catch (t) {
						if (t instanceof z && t.data.what === h) throw new tL(s, h);
						throw t;
					}
					let c = n.filter(([t]) => "conflict" === t).map(([t, e]) => e);
					if (c.length > 0) throw new tq(c);
					let l = n.filter(([t]) => "error" === t).map(([t, e]) => e);
					if (l.length > 0) throw new p(l.join(", "));
					if (f) return;
					let d = 0,
						w = n.length;
					await C.acquire({ fs: t, gitdir: a, cache: e }, async function (e) {
						await Promise.all(
							n
								.filter(([t]) => "delete" === t || "delete-index" === t)
								.map(async function ([a, n]) {
									let s = `${i}/${n}`;
									"delete" === a && (await t.rm(s)), e.delete({ filepath: n }), r && (await r({ phase: "Updating workdir", loaded: ++d, total: w }));
								})
						);
					}),
						await C.acquire({ fs: t, gitdir: a, cache: e }, async function (e) {
							for (let [a, s] of n)
								if ("rmdir" === a || "rmdir-index" === a) {
									let n = `${i}/${s}`;
									try {
										"rmdir-index" === a && e.delete({ filepath: s }), await t.rmdir(n), r && (await r({ phase: "Updating workdir", loaded: ++d, total: w }));
									} catch (t) {
										if ("ENOTEMPTY" === t.code) console.log(`Did not delete ${s} because directory is not empty`);
										else throw t;
									}
								}
						}),
						await Promise.all(
							n
								.filter(([t]) => "mkdir" === t || "mkdir-index" === t)
								.map(async function ([e, a]) {
									let n = `${i}/${a}`;
									await t.mkdir(n), r && (await r({ phase: "Updating workdir", loaded: ++d, total: w }));
								})
						),
						await C.acquire({ fs: t, gitdir: a, cache: e }, async function (s) {
							await Promise.all(
								n
									.filter(([t]) => "create" === t || "create-index" === t || "update" === t || "mkdir-index" === t)
									.map(async function ([n, o, c, l, f]) {
										let u = `${i}/${o}`;
										try {
											if ("create-index" !== n && "mkdir-index" !== n) {
												let { object: r } = await tW({ fs: t, cache: e, gitdir: a, oid: c });
												if ((f && (await t.rm(u)), 33188 === l)) await t.write(u, r);
												else if (33261 === l) await t.write(u, r, { mode: 511 });
												else if (40960 === l) await t.writelink(u, r);
												else throw new p(`Invalid mode 0o${l.toString(8)} detected in blob ${c}`);
											}
											let i = await t.lstat(u);
											33261 === l && (i.mode = 493), "mkdir-index" === n && (i.mode = 57344), s.insert({ filepath: o, stats: i, oid: c }), r && (await r({ phase: "Updating workdir", loaded: ++d, total: w }));
										} catch (t) {
											console.log(t);
										}
									})
							);
						});
				}
				if (!l) {
					let e = await tb.expand({ fs: t, gitdir: a, ref: s });
					e.startsWith("refs/heads") ? await tb.writeSymbolicRef({ fs: t, gitdir: a, ref: "HEAD", value: e }) : await tb.writeRef({ fs: t, gitdir: a, ref: "HEAD", value: h });
				}
			}
			async function e1({ fs: t, cache: e, onProgress: r, dir: i, gitdir: a, ref: n, force: s, filepaths: o }) {
				let c = 0;
				return eg({
					fs: t,
					cache: e,
					dir: i,
					gitdir: a,
					trees: [ed({ ref: n }), ew(), H()],
					map: async function (t, [e, i, a]) {
						if ("." !== t) {
							if (o && !o.some((e) => eQ(t, e))) return null;
							switch ((r && (await r({ phase: "Analyzing workdir", loaded: ++c })), [!!a, !!e, !!i].map(Number).join(""))) {
								case "000":
									return;
								case "001":
									if (s && o && o.includes(t)) return ["delete", t];
									return;
								case "010":
									switch (await e.type()) {
										case "tree":
											return ["mkdir", t];
										case "blob":
											return ["create", t, await e.oid(), await e.mode()];
										case "commit":
											return ["mkdir-index", t, await e.oid(), await e.mode()];
										default:
											return ["error", `new entry Unhandled type ${await e.type()}`];
									}
								case "011":
									switch (`${await e.type()}-${await i.type()}`) {
										case "tree-tree":
										case "commit-tree":
											return;
										case "tree-blob":
										case "blob-tree":
										case "commit-blob":
											return ["conflict", t];
										case "blob-blob":
											if ((await e.oid()) !== (await i.oid())) {
												if (s) return ["update", t, await e.oid(), await e.mode(), (await e.mode()) !== (await i.mode())];
												return ["conflict", t];
											}
											if ((await e.mode()) === (await i.mode())) return ["create-index", t, await e.oid(), await e.mode()];
											if (s) return ["update", t, await e.oid(), await e.mode(), !0];
											return ["conflict", t];
										default:
											return ["error", `new entry Unhandled type ${e.type}`];
									}
								case "100":
									return ["delete-index", t];
								case "101":
									switch (await a.type()) {
										case "tree":
											return ["rmdir", t];
										case "blob":
											if ((await a.oid()) === (await i.oid()) || s) return ["delete", t];
											return ["conflict", t];
										case "commit":
											return ["rmdir-index", t];
										default:
											return ["error", `delete entry Unhandled type ${await a.type()}`];
									}
								case "110":
								case "111":
									switch (`${await a.type()}-${await e.type()}`) {
										case "tree-tree":
											return;
										case "blob-blob":
											if ((await a.oid()) === (await e.oid()) && (await a.mode()) === (await e.mode()) && !s) return;
											if (i) {
												if ((await i.oid()) !== (await a.oid()) && (await i.oid()) !== (await e.oid())) {
													if (s) return ["update", t, await e.oid(), await e.mode(), (await e.mode()) !== (await i.mode())];
													return ["conflict", t];
												}
											} else if (s) return ["update", t, await e.oid(), await e.mode(), (await e.mode()) !== (await a.mode())];
											if ((await e.mode()) !== (await a.mode())) return ["update", t, await e.oid(), await e.mode(), !0];
											if ((await e.oid()) !== (await a.oid())) return ["update", t, await e.oid(), await e.mode(), !1];
											return;
										case "tree-blob":
											return ["update-dir-to-blob", t, await e.oid()];
										case "blob-tree":
											return ["update-blob-to-tree", t];
										case "commit-commit":
											return ["mkdir-index", t, await e.oid(), await e.mode()];
										default:
											return ["error", `update entry Unhandled type ${await a.type()}-${await e.type()}`];
									}
							}
						}
					},
					reduce: async function (t, e) {
						return (e = em(e)), t && (t && "rmdir" === t[0] ? e.push(t) : e.unshift(t)), e;
					},
				});
			}
			async function e2({
				fs: t,
				onProgress: e,
				dir: r,
				gitdir: i = J(r, ".git"),
				remote: a = "origin",
				ref: n,
				filepaths: s,
				noCheckout: o = !1,
				noUpdateHead: c = void 0 === n,
				dryRun: l = !1,
				force: f = !1,
				track: u = !0,
				cache: d = {},
			}) {
				try {
					return (
						eE("fs", t),
						eE("dir", r),
						eE("gitdir", i),
						await e0({ fs: new ex(t), cache: d, onProgress: e, dir: r, gitdir: i, remote: a, ref: n || "HEAD", filepaths: s, noCheckout: o, noUpdateHead: c, dryRun: l, force: f, track: u })
					);
				} catch (t) {
					throw ((t.caller = "git.checkout"), t);
				}
			}
			let e8 = RegExp("^refs/(heads/|tags/|remotes/)?(.*)");
			function e4(t) {
				let e = e8.exec(t);
				return e ? ("remotes/" === e[1] && t.endsWith("/HEAD") ? e[2].slice(0, -5) : e[2]) : t;
			}
			async function e6({ fs: t, gitdir: e, fullname: r = !1, test: i = !1 }) {
				let a = await tb.resolve({ fs: t, gitdir: e, ref: "HEAD", depth: 2 });
				if (i)
					try {
						await tb.resolve({ fs: t, gitdir: e, ref: a });
					} catch (t) {
						return;
					}
				if (a.startsWith("refs/")) return r ? a : e4(a);
			}
			function e3({ username: t = "", password: e = "" }) {
				return `Basic ${d.from(`${t}:${e}`).toString("base64")}`;
			}
			async function e9(t, e) {
				let r = tO(t);
				for (; ;) {
					let { value: t, done: i } = await r.next();
					if ((t && (await e(t)), i)) break;
				}
				r.return && r.return();
			}
			async function e5(t) {
				let e = 0,
					r = [];
				await e9(t, (t) => {
					r.push(t), (e += t.byteLength);
				});
				let i = new Uint8Array(e),
					a = 0;
				for (let t of r) i.set(t, a), (a += t.byteLength);
				return i;
			}
			function e7(t) {
				let e = t.match(/^https?:\/\/([^/]+)@/);
				if (null == e) return { url: t, auth: {} };
				let [r, i] = (e = e[1]).split(":");
				return { url: (t = t.replace(`${e}@`, "")), auth: { username: r, password: i } };
			}
			function rt(t, e) {
				let r = e.toString(16);
				return "0".repeat(t - r.length) + r;
			}
			class re {
				static flush() {
					return d.from("0000", "utf8");
				}
				static delim() {
					return d.from("0001", "utf8");
				}
				static encode(t) {
					"string" == typeof t && (t = d.from(t));
					let e = rt(4, t.length + 4);
					return d.concat([d.from(e, "utf8"), t]);
				}
				static streamReader(t) {
					let e = new tP(t);
					return async function () {
						try {
							let t = await e.read(4);
							if (null == t) return !0;
							if (((t = parseInt(t.toString("utf8"), 16)), 0 === t || 1 === t)) return null;
							let r = await e.read(t - 4);
							if (null == r) return !0;
							return r;
						} catch (e) {
							return (t.error = e), !0;
						}
					};
				}
			}
			async function rr(t) {
				let e;
				let r = {};
				for (; !0 !== (e = await t());) {
					if (null === e) continue;
					let t = (e = e.toString("utf8").replace(/\n$/, "")).indexOf("=");
					if (t > -1) {
						let i = e.slice(0, t),
							a = e.slice(t + 1);
						r[i] = a;
					} else r[e] = !0;
				}
				return { protocolVersion: 2, capabilities2: r };
			}
			async function ri(t, { service: e }) {
				let r = new Set(),
					i = new Map(),
					a = new Map(),
					n = re.streamReader(t),
					s = await n();
				for (; null === s;) s = await n();
				if (!0 === s) throw new tV();
				if (s.includes("version 2")) return rr(n);
				if (s.toString("utf8").replace(/\n$/, "") !== `# service=${e}`) throw new t6(`# service=${e}\\n`, s.toString("utf8"));
				let o = await n();
				for (; null === o;) o = await n();
				if (!0 === o) return { capabilities: r, refs: i, symrefs: a };
				if ((o = o.toString("utf8")).includes("version 2")) return rr(n);
				let [c, l] = ra(o, "\0", "\\x00");
				if ((l.split(" ").map((t) => r.add(t)), "0000000000000000000000000000000000000000 capabilities^{}" !== c)) {
					let [t, e] = ra(c, " ", " ");
					for (i.set(e, t); ;) {
						let t = await n();
						if (!0 === t) break;
						if (null !== t) {
							let [e, r] = ra(t.toString("utf8"), " ", " ");
							i.set(r, e);
						}
					}
				}
				for (let t of r)
					if (t.startsWith("symref=")) {
						let e = t.match(/symref=([^:]+):(.*)/);
						3 === e.length && a.set(e[1], e[2]);
					}
				return { protocolVersion: 1, capabilities: r, refs: i, symrefs: a };
			}
			function ra(t, e, r) {
				let i = t.trim().split(e);
				if (2 !== i.length) throw new t6(`Two strings separated by '${r}'`, t.toString("utf8"));
				return i;
			}
			let rn = (t, e) => (t.endsWith("?") ? `${t}${e}` : `${t}/${e.replace(/^https?:\/\//, "")}`),
				rs = (t, e) => {
					(e.username || e.password) && (t.Authorization = e3(e)), e.headers && Object.assign(t, e.headers);
				},
				ro = async (t) => {
					try {
						let e = d.from(await e5(t.body)),
							r = e.toString("utf8");
						return { preview: r.length < 256 ? r : r.slice(0, 256) + "...", response: r, data: e };
					} catch (t) {
						return {};
					}
				};
			class rc {
				static async capabilities() {
					return ["discover", "connect"];
				}
				static async discover({ http: t, onProgress: e, onAuth: r, onAuthSuccess: i, onAuthFailure: a, corsProxy: n, service: s, url: o, headers: c, protocolVersion: l }) {
					let f,
						u,
						{ url: d, auth: h } = e7(o),
						w = n ? rn(n, d) : d;
					(h.username || h.password) && (c.Authorization = e3(h)), 2 === l && (c["Git-Protocol"] = "version=2");
					let m = !1;
					do
						if (((f = await t.request({ onProgress: e, method: "GET", url: `${w}/info/refs?service=${s}`, headers: c })), (u = !1), 401 === f.statusCode || 203 === f.statusCode)) {
							let t = m ? a : r;
							if (t) {
								if ((h = await t(d, { ...h, headers: { ...c } })) && h.cancel) throw new ee();
								h && (rs(c, h), (m = !0), (u = !0));
							}
						} else 200 === f.statusCode && m && i && (await i(d, h));
					while (u);
					if (200 !== f.statusCode) {
						let { response: t } = await ro(f);
						throw new tY(f.statusCode, f.statusMessage, t);
					}
					if (f.headers["content-type"] === `application/x-${s}-advertisement`) {
						let t = await ri(f.body, { service: s });
						return (t.auth = h), t;
					}
					{
						let { preview: t, response: e, data: r } = await ro(f);
						try {
							let t = await ri([r], { service: s });
							return (t.auth = h), t;
						} catch (r) {
							throw new t5(t, e);
						}
					}
				}
				static async connect({ http: t, onProgress: e, corsProxy: r, service: i, url: a, auth: n, body: s, headers: o }) {
					let c = e7(a);
					c && (a = c.url), r && (a = rn(r, a)), (o["content-type"] = `application/x-${i}-request`), (o.accept = `application/x-${i}-result`), rs(o, n);
					let l = await t.request({ onProgress: e, method: "POST", url: `${a}/${i}`, body: s, headers: o });
					if (200 !== l.statusCode) {
						let { response: t } = ro(l);
						throw new tY(l.statusCode, l.statusMessage, t);
					}
					return l;
				}
			}
			class rl {
				static getRemoteHelperFor({ url: t }) {
					let e = new Map();
					e.set("http", rc), e.set("https", rc);
					let r = (function ({ url: t }) {
						if (t.startsWith("git@")) return { transport: "ssh", address: t };
						let e = t.match(/(\w+)(:\/\/|::)(.*)/);
						if (null !== e) {
							if ("://" === e[2]) return { transport: e[1], address: e[0] };
							if ("::" === e[2]) return { transport: e[1], address: e[3] };
						}
					})({ url: t });
					if (!r) throw new et(t);
					if (e.has(r.transport)) return e.get(r.transport);
					throw new t7(t, r.transport, "ssh" === r.transport ? t.replace(/^git@([^:]+):/, "https://$1/").replace(/^ssh:\/\//, "https://") : void 0);
				}
			}
			let rf = null;
			class ru {
				static async read({ fs: t, gitdir: e }) {
					null === rf && (rf = new a());
					let r = J(e, "shallow"),
						i = new Set();
					return (
						await rf.acquire(r, async function () {
							let e = await t.read(r, { encoding: "utf8" });
							if (null === e || "" === e.trim()) return i;
							e.trim()
								.split("\n")
								.map((t) => i.add(t));
						}),
						i
					);
				}
				static async write({ fs: t, gitdir: e, oids: r }) {
					null === rf && (rf = new a());
					let i = J(e, "shallow");
					if (r.size > 0) {
						let e = [...r].join("\n") + "\n";
						await rf.acquire(i, async function () {
							await t.write(i, e, { encoding: "utf8" });
						});
					} else
						await rf.acquire(i, async function () {
							await t.rm(i);
						});
				}
			}
			async function rd({ fs: t, gitdir: e, oid: r }) {
				let i = `objects/${r.slice(0, 2)}/${r.slice(2)}`;
				return t.exists(`${e}/${i}`);
			}
			async function rh({ fs: t, cache: e, gitdir: r, oid: i, getExternalRefDelta: a }) {
				let n = await t.readdir(J(r, "objects/pack"));
				for (let s of (n = n.filter((t) => t.endsWith(".idx")))) {
					let n = `${r}/objects/pack/${s}`,
						o = await tH({ fs: t, cache: e, filename: n, getExternalRefDelta: a });
					if (o.error) throw new p(o.error);
					if (o.offsets.has(i)) return !0;
				}
				return !1;
			}
			async function rw({ fs: t, cache: e, gitdir: r, oid: i, format: a = "content" }) {
				let n = await rd({ fs: t, gitdir: r, oid: i });
				return n || (n = await rh({ fs: t, cache: e, gitdir: r, oid: i, getExternalRefDelta: (i) => tW({ fs: t, cache: e, gitdir: r, oid: i }) })), n;
			}
			function rm(t, e) {
				let r = t.map((t) => t.split("=", 1)[0]);
				return e.filter((t) => {
					let e = t.split("=", 1)[0];
					return r.includes(e);
				});
			}
			let rp = { version: "1.25.10", agent: "git/isomorphic-git@1.25.10" };
			class rg {
				constructor() {
					this._queue = [];
				}
				write(t) {
					if (this._ended) throw Error("You cannot write to a FIFO that has already been ended!");
					if (this._waiting) {
						let e = this._waiting;
						(this._waiting = null), e({ value: t });
					} else this._queue.push(t);
				}
				end() {
					if (((this._ended = !0), this._waiting)) {
						let t = this._waiting;
						(this._waiting = null), t({ done: !0 });
					}
				}
				destroy(t) {
					(this.error = t), this.end();
				}
				async next() {
					if (this._queue.length > 0) return { value: this._queue.shift() };
					if (this._ended) return { done: !0 };
					if (this._waiting) throw Error("You cannot call read until the previous call to read has returned!");
					return new Promise((t) => {
						this._waiting = t;
					});
				}
			}
			function ry(t) {
				let e = new rg(),
					r = "";
				return (
					(async () => {
						await e9(t, (t) => {
							for (t = t.toString("utf8"), r += t; ;) {
								let t = (function (t) {
									let e = t.indexOf("\r"),
										r = t.indexOf("\n");
									return -1 === e && -1 === r ? -1 : -1 === e ? r + 1 : -1 === r ? e + 1 : r === e + 1 ? r + 1 : Math.min(e, r) + 1;
								})(r);
								if (-1 === t) break;
								e.write(r.slice(0, t)), (r = r.slice(t));
							}
						}),
							r.length > 0 && e.write(r),
							e.end();
					})(),
					e
				);
			}
			class rb {
				static demux(t) {
					let e = re.streamReader(t),
						r = new rg(),
						i = new rg(),
						a = new rg(),
						n = async function () {
							let s = await e();
							if (null === s) return n();
							if (!0 === s) {
								r.end(), a.end(), t.error ? i.destroy(t.error) : i.end();
								return;
							}
							switch (s[0]) {
								case 1:
									i.write(s.slice(1));
									break;
								case 2:
									a.write(s.slice(1));
									break;
								case 3: {
									let t = s.slice(1);
									a.write(t), r.end(), a.end(), i.destroy(Error(t.toString("utf8")));
									return;
								}
								default:
									r.write(s);
							}
							n();
						};
					return n(), { packetlines: r, packfile: i, progress: a };
				}
			}
			async function r$(t) {
				let { packetlines: e, packfile: r, progress: i } = rb.demux(t),
					a = [],
					n = [],
					s = [],
					o = !1,
					c = !1;
				return new Promise((l, f) => {
					e9(e, (e) => {
						let u = e.toString("utf8").trim();
						if (u.startsWith("shallow")) {
							let t = u.slice(-41).trim();
							40 !== t.length && f(new F(t)), a.push(t);
						} else if (u.startsWith("unshallow")) {
							let t = u.slice(-41).trim();
							40 !== t.length && f(new F(t)), n.push(t);
						} else if (u.startsWith("ACK")) {
							let [, t, e] = u.split(" ");
							s.push({ oid: t, status: e }), e || (c = !0);
						} else u.startsWith("NAK") ? ((o = !0), (c = !0)) : ((c = !0), (o = !0));
						c && (t.error ? f(t.error) : l({ shallows: a, unshallows: n, acks: s, nak: o, packfile: r, progress: i }));
					}).finally(() => {
						c || (t.error ? f(t.error) : l({ shallows: a, unshallows: n, acks: s, nak: o, packfile: r, progress: i }));
					});
				});
			}
			async function r_({
				fs: t,
				cache: e,
				http: r,
				onProgress: i,
				onMessage: a,
				onAuth: n,
				onAuthSuccess: s,
				onAuthFailure: o,
				gitdir: c,
				ref: l,
				remoteRef: f,
				remote: u,
				url: h,
				corsProxy: w,
				depth: m = null,
				since: p = null,
				exclude: g = [],
				relative: y = !1,
				tags: b = !1,
				singleBranch: $ = !1,
				headers: _ = {},
				prune: v = !1,
				pruneTags: x = !1,
			}) {
				let E = l || (await e6({ fs: t, gitdir: c, test: !0 })),
					k = await tm.get({ fs: t, gitdir: c }),
					S = u || (E && (await k.get(`branch.${E}.remote`))) || "origin",
					j = h || (await k.get(`remote.${S}.url`));
				if (void 0 === j) throw new t8("remote OR url");
				let R = f || (E && (await k.get(`branch.${E}.merge`))) || l || "HEAD";
				void 0 === w && (w = await k.get("http.corsProxy"));
				let I = rl.getRemoteHelperFor({ url: j }),
					O = await I.discover({ http: r, onAuth: n, onAuthSuccess: s, onAuthFailure: o, corsProxy: w, service: "git-upload-pack", url: j, headers: _, protocolVersion: 1 }),
					P = O.auth,
					A = O.refs;
				if (0 === A.size) return { defaultBranch: null, fetchHead: null, fetchHeadDescription: null };
				if (null !== m && !O.capabilities.has("shallow")) throw new t9("shallow", "depth");
				if (null !== p && !O.capabilities.has("deepen-since")) throw new t9("deepen-since", "since");
				if (g.length > 0 && !O.capabilities.has("deepen-not")) throw new t9("deepen-not", "exclude");
				if (!0 === y && !O.capabilities.has("deepen-relative")) throw new t9("deepen-relative", "relative");
				let { oid: U, fullref: C } = tb.resolveAgainstMap({ ref: R, map: A });
				for (let t of A.keys()) t === C || "HEAD" === t || t.startsWith("refs/heads/") || (b && t.startsWith("refs/tags/")) || A.delete(t);
				let B = rm([...O.capabilities], ["multi_ack_detailed", "no-done", "side-band-64k", "ofs-delta", `agent=${rp.agent}`]);
				y && B.push("deepen-relative");
				let N = $ ? [U] : A.values(),
					D = $ ? [E] : await tb.listRefs({ fs: t, gitdir: c, filepath: "refs" }),
					M = [];
				for (let r of D)
					try {
						r = await tb.expand({ fs: t, gitdir: c, ref: r });
						let i = await tb.resolve({ fs: t, gitdir: c, ref: r });
						(await rw({ fs: t, cache: e, gitdir: c, oid: i })) && M.push(i);
					} catch (t) { }
				M = [...new Set(M)];
				let T = await ru.read({ fs: t, gitdir: c }),
					H = (function ({ capabilities: t = [], wants: e = [], haves: r = [], shallows: i = [], depth: a = null, since: n = null, exclude: s = [] }) {
						let o = [];
						e = [...new Set(e)];
						let c = ` ${t.join(" ")}`;
						for (let t of e)
							o.push(
								re.encode(`want ${t}${c}
`)
							),
								(c = "");
						for (let t of i)
							o.push(
								re.encode(`shallow ${t}
`)
							);
						for (let t of (null !== a &&
							o.push(
								re.encode(`deepen ${a}
`)
							),
							null !== n &&
							o.push(
								re.encode(`deepen-since ${Math.floor(n.valueOf() / 1e3)}
`)
							),
							s))
							o.push(
								re.encode(`deepen-not ${t}
`)
							);
						for (let t of (o.push(re.flush()), r))
							o.push(
								re.encode(`have ${t}
`)
							);
						return (
							o.push(
								re.encode(`done
`)
							),
							o
						);
					})({ capabilities: B, wants: N, haves: M, shallows: O.capabilities.has("shallow") ? [...T] : [], depth: m, since: p, exclude: g }),
					z = d.from(await e5(H)),
					W = await I.connect({ http: r, onProgress: i, corsProxy: w, service: "git-upload-pack", url: j, auth: P, body: [z], headers: _ }),
					F = await r$(W.body);
				for (let r of (W.headers && (F.headers = W.headers), F.shallows))
					if (!T.has(r))
						try {
							let { object: i } = await tW({ fs: t, cache: e, gitdir: c, oid: r }),
								a = new el(i),
								n = await Promise.all(a.headers().parent.map((r) => rw({ fs: t, cache: e, gitdir: c, oid: r })));
							0 === n.length || n.every((t) => t) || T.add(r);
						} catch (t) {
							T.add(r);
						}
				for (let t of F.unshallows) T.delete(t);
				if ((await ru.write({ fs: t, gitdir: c, oids: T }), $)) {
					let e = new Map([[C, U]]),
						r = new Map(),
						i = 10,
						a = C;
					for (; i--;) {
						let t = O.symrefs.get(a);
						if (void 0 === t) break;
						r.set(a, t), (a = t);
					}
					let n = A.get(a);
					n && e.set(a, n);
					let { pruned: s } = await tb.updateRemoteRefs({ fs: t, gitdir: c, remote: S, refs: e, symrefs: r, tags: b, prune: v });
					v && (F.pruned = s);
				} else {
					let { pruned: e } = await tb.updateRemoteRefs({ fs: t, gitdir: c, remote: S, refs: A, symrefs: O.symrefs, tags: b, prune: v, pruneTags: x });
					v && (F.pruned = e);
				}
				if (((F.HEAD = O.symrefs.get("HEAD")), void 0 === F.HEAD)) {
					let { oid: t } = tb.resolveAgainstMap({ ref: "HEAD", map: A });
					for (let [e, r] of A.entries())
						if ("HEAD" !== e && r === t) {
							F.HEAD = e;
							break;
						}
				}
				let G = C.startsWith("refs/tags") ? "tag" : "branch";
				(F.FETCH_HEAD = { oid: U, description: `${G} '${e4(C)}' of ${j}` }),
					(i || a) &&
					e9(ry(F.progress), async (t) => {
						if ((a && (await a(t)), i)) {
							let e = t.match(/([^:]*).*\((\d+?)\/(\d+?)\)/);
							e && (await i({ phase: e[1].trim(), loaded: parseInt(e[2], 10), total: parseInt(e[3], 10) }));
						}
					});
				let q = d.from(await e5(F.packfile));
				if (W.body.error) throw W.body.error;
				let L = q.slice(-20).toString("hex"),
					V = { defaultBranch: F.HEAD, fetchHead: F.FETCH_HEAD.oid, fetchHeadDescription: F.FETCH_HEAD.description };
				if ((F.headers && (V.headers = F.headers), v && (V.pruned = F.pruned), "" !== L && "5041434b0000000200000000" !== q.slice(0, 12).toString("hex"))) {
					V.packfile = `objects/pack/pack-${L}.pack`;
					let r = J(c, V.packfile);
					await t.write(r, q);
					let a = await tD.fromPack({ pack: q, getExternalRefDelta: (r) => tW({ fs: t, cache: e, gitdir: c, oid: r }), onProgress: i });
					await t.write(r.replace(/\.pack$/, ".idx"), await a.toBuffer());
				}
				return V;
			}
			async function rv({ fs: t, bare: e = !1, dir: r, gitdir: i = e ? r : J(r, ".git"), defaultBranch: a = "master" }) {
				if (await t.exists(i + "/config")) return;
				let n = ["hooks", "info", "objects/info", "objects/pack", "refs/heads", "refs/tags"];
				for (let e of (n = n.map((t) => i + "/" + t))) await t.mkdir(e);
				await t.write(
					i + "/config",
					`[core]
	repositoryformatversion = 0
	filemode = false
	bare = ${e}
` +
					(e ? "" : "	logallrefupdates = true\n") +
					"	symlinks = false\n	ignorecase = true\n"
				),
					await t.write(
						i + "/HEAD",
						`ref: refs/heads/${a}
`
					);
			}
			async function rx({
				fs: t,
				cache: e,
				http: r,
				onProgress: i,
				onMessage: a,
				onAuth: n,
				onAuthSuccess: s,
				onAuthFailure: o,
				dir: c,
				gitdir: l,
				url: f,
				corsProxy: u,
				ref: d,
				remote: h,
				depth: w,
				since: m,
				exclude: p,
				relative: g,
				singleBranch: y,
				noCheckout: b,
				noTags: $,
				headers: _,
			}) {
				try {
					if ((await rv({ fs: t, gitdir: l }), await eV({ fs: t, gitdir: l, remote: h, url: f, force: !1 }), u)) {
						let e = await tm.get({ fs: t, gitdir: l });
						await e.set("http.corsProxy", u), await tm.save({ fs: t, gitdir: l, config: e });
					}
					let { defaultBranch: v, fetchHead: x } = await r_({
						fs: t,
						cache: e,
						http: r,
						onProgress: i,
						onMessage: a,
						onAuth: n,
						onAuthSuccess: s,
						onAuthFailure: o,
						gitdir: l,
						ref: d,
						remote: h,
						corsProxy: u,
						depth: w,
						since: m,
						exclude: p,
						relative: g,
						singleBranch: y,
						headers: _,
						tags: !$,
					});
					if (null === x) return;
					(d = (d = d || v).replace("refs/heads/", "")), await e0({ fs: t, cache: e, onProgress: i, dir: c, gitdir: l, ref: d, remote: h, noCheckout: b });
				} catch (e) {
					throw (await t.rmdir(l, { recursive: !0, maxRetries: 10 }).catch(() => void 0), e);
				}
			}
			async function rE({
				fs: t,
				http: e,
				onProgress: r,
				onMessage: i,
				onAuth: a,
				onAuthSuccess: n,
				onAuthFailure: s,
				dir: o,
				gitdir: c = J(o, ".git"),
				url: l,
				corsProxy: f,
				ref: u,
				remote: d = "origin",
				depth: h,
				since: w,
				exclude: m = [],
				relative: p = !1,
				singleBranch: g = !1,
				noCheckout: y = !1,
				noTags: b = !1,
				headers: $ = {},
				cache: _ = {},
			}) {
				try {
					return (
						eE("fs", t),
						eE("http", e),
						eE("gitdir", c),
						y || eE("dir", o),
						eE("url", l),
						await rx({
							fs: new ex(t),
							cache: _,
							http: e,
							onProgress: r,
							onMessage: i,
							onAuth: a,
							onAuthSuccess: n,
							onAuthFailure: s,
							dir: o,
							gitdir: c,
							url: l,
							corsProxy: f,
							ref: u,
							remote: d,
							depth: h,
							since: w,
							exclude: m,
							relative: p,
							singleBranch: g,
							noCheckout: y,
							noTags: b,
							headers: $,
						})
					);
				} catch (t) {
					throw ((t.caller = "git.clone"), t);
				}
			}
			async function rk({ fs: t, onSign: e, dir: r, gitdir: i = J(r, ".git"), message: a, author: n, committer: s, signingKey: o, dryRun: c = !1, noUpdateBranch: l = !1, ref: f, parent: u, tree: d, cache: h = {} }) {
				try {
					eE("fs", t), eE("message", a), o && eE("onSign", e);
					let r = new ex(t),
						w = await eG({ fs: r, gitdir: i, author: n });
					if (!w) throw new t2("author");
					let m = await eq({ fs: r, gitdir: i, author: w, committer: s });
					if (!m) throw new t2("committer");
					return await eN({ fs: r, cache: h, onSign: e, gitdir: i, message: a, author: w, committer: m, signingKey: o, dryRun: c, noUpdateBranch: l, ref: f, parent: u, tree: d });
				} catch (t) {
					throw ((t.caller = "git.commit"), t);
				}
			}
			async function rS({ fs: t, dir: e, gitdir: r = J(e, ".git"), fullname: i = !1, test: a = !1 }) {
				try {
					return eE("fs", t), eE("gitdir", r), await e6({ fs: new ex(t), gitdir: r, fullname: i, test: a });
				} catch (t) {
					throw ((t.caller = "git.currentBranch"), t);
				}
			}
			async function rj({ fs: t, gitdir: e, ref: r }) {
				if (((r = r.startsWith("refs/heads/") ? r : `refs/heads/${r}`), !(await tb.exists({ fs: t, gitdir: e, ref: r })))) throw new z(r);
				let i = await tb.expand({ fs: t, gitdir: e, ref: r });
				if (i === (await e6({ fs: t, gitdir: e, fullname: !0 }))) {
					let r = await tb.resolve({ fs: t, gitdir: e, ref: i });
					await tb.writeRef({ fs: t, gitdir: e, ref: "HEAD", value: r });
				}
				await tb.deleteRef({ fs: t, gitdir: e, ref: i });
			}
			async function rR({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i }) {
				try {
					return eE("fs", t), eE("ref", i), await rj({ fs: new ex(t), gitdir: r, ref: i });
				} catch (t) {
					throw ((t.caller = "git.deleteBranch"), t);
				}
			}
			async function rI({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i }) {
				try {
					eE("fs", t), eE("ref", i), await tb.deleteRef({ fs: new ex(t), gitdir: r, ref: i });
				} catch (t) {
					throw ((t.caller = "git.deleteRef"), t);
				}
			}
			async function rO({ fs: t, gitdir: e, remote: r }) {
				let i = await tm.get({ fs: t, gitdir: e });
				await i.deleteSection("remote", r), await tm.save({ fs: t, gitdir: e, config: i });
			}
			async function rP({ fs: t, dir: e, gitdir: r = J(e, ".git"), remote: i }) {
				try {
					return eE("fs", t), eE("remote", i), await rO({ fs: new ex(t), gitdir: r, remote: i });
				} catch (t) {
					throw ((t.caller = "git.deleteRemote"), t);
				}
			}
			async function rA({ fs: t, gitdir: e, ref: r }) {
				(r = r.startsWith("refs/tags/") ? r : `refs/tags/${r}`), await tb.deleteRef({ fs: t, gitdir: e, ref: r });
			}
			async function rU({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i }) {
				try {
					return eE("fs", t), eE("ref", i), await rA({ fs: new ex(t), gitdir: r, ref: i });
				} catch (t) {
					throw ((t.caller = "git.deleteTag"), t);
				}
			}
			async function rC({ fs: t, gitdir: e, oid: r }) {
				let i = r.slice(0, 2);
				return (await t.readdir(`${e}/objects/${i}`)).map((t) => `${i}${t}`).filter((t) => t.startsWith(r));
			}
			async function rB({ fs: t, cache: e, gitdir: r, oid: i, getExternalRefDelta: a }) {
				let n = [],
					s = await t.readdir(J(r, "objects/pack"));
				for (let o of (s = s.filter((t) => t.endsWith(".idx")))) {
					let s = `${r}/objects/pack/${o}`,
						c = await tH({ fs: t, cache: e, filename: s, getExternalRefDelta: a });
					if (c.error) throw new p(c.error);
					for (let t of c.offsets.keys()) t.startsWith(i) && n.push(t);
				}
				return n;
			}
			async function rN({ fs: t, cache: e, gitdir: r, oid: i }) {
				let a = await rC({ fs: t, gitdir: r, oid: i });
				for (let n of await rB({ fs: t, cache: e, gitdir: r, oid: i, getExternalRefDelta: (i) => tW({ fs: t, cache: e, gitdir: r, oid: i }) })) -1 === a.indexOf(n) && a.push(n);
				if (1 === a.length) return a[0];
				if (a.length > 1) throw new tG("oids", i, a);
				throw new z(`an object matching "${i}"`);
			}
			async function rD({ fs: t, dir: e, gitdir: r = J(e, ".git"), oid: i, cache: a = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oid", i), await rN({ fs: new ex(t), cache: a, gitdir: r, oid: i });
				} catch (t) {
					throw ((t.caller = "git.expandOid"), t);
				}
			}
			async function rM({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("ref", i), await tb.expand({ fs: new ex(t), gitdir: r, ref: i });
				} catch (t) {
					throw ((t.caller = "git.expandRef"), t);
				}
			}
			async function rT({ fs: t, cache: e, gitdir: r, oids: i }) {
				let a = {},
					n = i.length,
					s = i.map((t, e) => ({ index: e, oid: t }));
				for (; s.length;) {
					let i = new Set();
					for (let { oid: t, index: e } of s) a[t] || (a[t] = new Set()), a[t].add(e), a[t].size === n && i.add(t);
					if (i.size > 0) return [...i];
					let o = new Map();
					for (let { oid: i, index: n } of s)
						try {
							let { object: s } = await tW({ fs: t, cache: e, gitdir: r, oid: i }),
								{ parent: c } = el.from(s).parseHeaders();
							for (let t of c) (a[t] && a[t].has(n)) || o.set(t + ":" + n, { oid: t, index: n });
						} catch (t) { }
					s = Array.from(o.values());
				}
				return [];
			}
			let rH = /^.*(\r?\n|$)/gm;
			function rz({ branches: t, contents: e }) {
				let r = t[1],
					i = t[2],
					a = e[0],
					n = e[1],
					s = e[2],
					o = u(n.match(rH), a.match(rH), s.match(rH)),
					c = "",
					l = !0;
				for (let t of o)
					t.ok && (c += t.ok.join("")),
						t.conflict &&
						((l = !1),
							(c +=
								`${"<".repeat(7)} ${r}
` +
								t.conflict.a.join("") +
								`${"=".repeat(7)}
` +
								t.conflict.b.join("") +
								`${">".repeat(7)} ${i}
`));
				return { cleanMerge: l, mergedText: c };
			}
			async function rW({
				fs: t,
				cache: e,
				dir: r,
				gitdir: i = J(r, ".git"),
				index: a,
				ourOid: n,
				baseOid: s,
				theirOid: o,
				ourName: c = "ours",
				baseName: l = "base",
				theirName: f = "theirs",
				dryRun: u = !1,
				abortOnConflict: d = !0,
				mergeDriver: h,
			}) {
				let w = ed({ ref: n }),
					m = ed({ ref: s }),
					p = ed({ ref: o }),
					g = [],
					y = [],
					b = [],
					$ = [],
					_ = await eg({
						fs: t,
						cache: e,
						dir: r,
						gitdir: i,
						trees: [w, m, p],
						map: async function (e, [r, n, s]) {
							let o = B(e),
								u = await ek(r, n),
								w = await ek(s, n);
							switch (`${u}-${w}`) {
								case "false-false":
									return { mode: await n.mode(), path: o, oid: await n.oid(), type: await n.type() };
								case "false-true":
									return s ? { mode: await s.mode(), path: o, oid: await s.oid(), type: await s.type() } : void 0;
								case "true-false":
									return r ? { mode: await r.mode(), path: o, oid: await r.oid(), type: await r.type() } : void 0;
								case "true-true":
									if (r && n && s && (await r.type()) === "blob" && (await n.type()) === "blob" && (await s.type()) === "blob")
										return rF({ fs: t, gitdir: i, path: o, ours: r, base: n, theirs: s, ourName: c, baseName: l, theirName: f, mergeDriver: h }).then(async (t) => {
											if (t.cleanMerge) d || a.insert({ filepath: e, oid: t.mergeResult.oid, stage: 0 });
											else if ((g.push(e), y.push(e), !d)) {
												let t = await n.oid(),
													i = await r.oid(),
													o = await s.oid();
												a.delete({ filepath: e }), a.insert({ filepath: e, oid: t, stage: 1 }), a.insert({ filepath: e, oid: i, stage: 2 }), a.insert({ filepath: e, oid: o, stage: 3 });
											}
											return t.mergeResult;
										});
									if (n && !r && s && (await n.type()) === "blob" && (await s.type()) === "blob") {
										if ((g.push(e), b.push(e), !d)) {
											let t = await n.oid(),
												r = await s.oid();
											a.delete({ filepath: e }), a.insert({ filepath: e, oid: t, stage: 1 }), a.insert({ filepath: e, oid: r, stage: 3 });
										}
										return { mode: await s.mode(), oid: await s.oid(), type: "blob", path: o };
									}
									if (n && r && !s && (await n.type()) === "blob" && (await r.type()) === "blob") {
										if ((g.push(e), $.push(e), !d)) {
											let t = await n.oid(),
												i = await r.oid();
											a.delete({ filepath: e }), a.insert({ filepath: e, oid: t, stage: 1 }), a.insert({ filepath: e, oid: i, stage: 2 });
										}
										return { mode: await r.mode(), oid: await r.oid(), type: "blob", path: o };
									}
									if (n && !r && !s && (await n.type()) === "blob") return;
									throw new t0();
							}
						},
						reduce:
							0 !== g.length && (!r || d)
								? void 0
								: async (e, r) => {
									let a = r.filter(Boolean);
									if (e && (!e || "tree" !== e.type || 0 !== a.length)) {
										if (a.length > 0) {
											let r = new tE(a).toObject(),
												n = await eA({ fs: t, gitdir: i, type: "tree", object: r, dryRun: u });
											e.oid = n;
										}
										return e;
									}
								},
					});
				return 0 !== g.length
					? (r &&
						!d &&
						(await eg({
							fs: t,
							cache: e,
							dir: r,
							gitdir: i,
							trees: [ed({ ref: _.oid })],
							map: async function (e, [i]) {
								let a = `${r}/${e}`;
								if ((await i.type()) === "blob") {
									let e = await i.mode(),
										r = new TextDecoder().decode(await i.content());
									await t.write(a, r, { mode: e });
								}
								return !0;
							},
						})),
						new t1(g, y, b, $))
					: _.oid;
			}
			async function rF({ fs: t, gitdir: e, path: r, ours: i, base: a, theirs: n, ourName: s, theirName: o, baseName: c, dryRun: l, mergeDriver: f = rz }) {
				let u = "blob",
					h = (await a.mode()) === (await i.mode()) ? await n.mode() : await i.mode();
				if ((await i.oid()) === (await n.oid())) return { cleanMerge: !0, mergeResult: { mode: h, path: r, oid: await i.oid(), type: u } };
				if ((await i.oid()) === (await a.oid())) return { cleanMerge: !0, mergeResult: { mode: h, path: r, oid: await n.oid(), type: u } };
				if ((await n.oid()) === (await a.oid())) return { cleanMerge: !0, mergeResult: { mode: h, path: r, oid: await i.oid(), type: u } };
				let w = d.from(await i.content()).toString("utf8"),
					m = d.from(await a.content()).toString("utf8"),
					p = d.from(await n.content()).toString("utf8"),
					{ mergedText: g, cleanMerge: y } = await f({ branches: [c, s, o], contents: [m, w, p], path: r });
				return { cleanMerge: y, mergeResult: { mode: h, path: r, oid: await eA({ fs: t, gitdir: e, type: "blob", object: d.from(g, "utf8"), dryRun: l }), type: u } };
			}
			async function rG({
				fs: t,
				cache: e,
				dir: r,
				gitdir: i,
				ours: a,
				theirs: n,
				fastForward: s = !0,
				fastForwardOnly: o = !1,
				dryRun: c = !1,
				noUpdateBranch: l = !1,
				abortOnConflict: f = !0,
				message: u,
				author: d,
				committer: h,
				signingKey: w,
				onSign: m,
				mergeDriver: p,
			}) {
				void 0 === a && (a = await e6({ fs: t, gitdir: i, fullname: !0 })), (a = await tb.expand({ fs: t, gitdir: i, ref: a })), (n = await tb.expand({ fs: t, gitdir: i, ref: n }));
				let g = await tb.resolve({ fs: t, gitdir: i, ref: a }),
					y = await tb.resolve({ fs: t, gitdir: i, ref: n }),
					b = await rT({ fs: t, cache: e, gitdir: i, oids: [g, y] });
				if (1 !== b.length) throw new t0();
				let $ = b[0];
				if ($ === y) return { oid: g, alreadyMerged: !0 };
				if (s && $ === g) return c || l || (await tb.writeRef({ fs: t, gitdir: i, ref: a, value: y })), { oid: y, fastForward: !0 };
				{
					if (o) throw new tK();
					let s = await C.acquire({ fs: t, gitdir: i, cache: e, allowUnmerged: !1 }, async (s) =>
						rW({ fs: t, cache: e, dir: r, gitdir: i, index: s, ourOid: g, theirOid: y, baseOid: $, ourName: e4(a), baseName: "base", theirName: e4(n), dryRun: c, abortOnConflict: f, mergeDriver: p })
					);
					if (s instanceof t1) throw s;
					return (
						u || (u = `Merge branch '${e4(n)}' into ${e4(a)}`),
						{ oid: await eN({ fs: t, cache: e, gitdir: i, message: u, ref: a, tree: s, parent: [g, y], author: d, committer: h, signingKey: w, onSign: m, dryRun: c, noUpdateBranch: l }), tree: s, mergeCommit: !0 }
					);
				}
			}
			async function rq({
				fs: t,
				cache: e,
				http: r,
				onProgress: i,
				onMessage: a,
				onAuth: n,
				onAuthSuccess: s,
				onAuthFailure: o,
				dir: c,
				gitdir: l,
				ref: f,
				url: u,
				remote: d,
				remoteRef: h,
				prune: w,
				pruneTags: m,
				fastForward: p,
				fastForwardOnly: g,
				corsProxy: y,
				singleBranch: b,
				headers: $,
				author: _,
				committer: v,
				signingKey: x,
			}) {
				try {
					if (!f) {
						let e = await e6({ fs: t, gitdir: l });
						if (!e) throw new t8("ref");
						f = e;
					}
					let { fetchHead: E, fetchHeadDescription: k } = await r_({
						fs: t,
						cache: e,
						http: r,
						onProgress: i,
						onMessage: a,
						onAuth: n,
						onAuthSuccess: s,
						onAuthFailure: o,
						gitdir: l,
						corsProxy: y,
						ref: f,
						url: u,
						remote: d,
						remoteRef: h,
						singleBranch: b,
						headers: $,
						prune: w,
						pruneTags: m,
					});
					await rG({ fs: t, cache: e, gitdir: l, ours: f, theirs: E, fastForward: p, fastForwardOnly: g, message: `Merge ${k}`, author: _, committer: v, signingKey: x, dryRun: !1, noUpdateBranch: !1 }),
						await e0({ fs: t, cache: e, onProgress: i, dir: c, gitdir: l, ref: f, remote: d, noCheckout: !1 });
				} catch (t) {
					throw ((t.caller = "git.pull"), t);
				}
			}
			async function rL({
				fs: t,
				http: e,
				onProgress: r,
				onMessage: i,
				onAuth: a,
				onAuthSuccess: n,
				onAuthFailure: s,
				dir: o,
				gitdir: c = J(o, ".git"),
				ref: l,
				url: f,
				remote: u,
				remoteRef: d,
				corsProxy: h,
				singleBranch: w,
				headers: m = {},
				cache: p = {},
			}) {
				try {
					eE("fs", t), eE("http", e), eE("gitdir", c);
					let g = { name: "", email: "", timestamp: Date.now(), timezoneOffset: 0 };
					return await rq({
						fs: new ex(t),
						cache: p,
						http: e,
						onProgress: r,
						onMessage: i,
						onAuth: a,
						onAuthSuccess: n,
						onAuthFailure: s,
						dir: o,
						gitdir: c,
						ref: l,
						url: f,
						remote: u,
						remoteRef: d,
						fastForwardOnly: !0,
						corsProxy: h,
						singleBranch: w,
						headers: m,
						author: g,
						committer: g,
					});
				} catch (t) {
					throw ((t.caller = "git.fastForward"), t);
				}
			}
			async function rV({
				fs: t,
				http: e,
				onProgress: r,
				onMessage: i,
				onAuth: a,
				onAuthSuccess: n,
				onAuthFailure: s,
				dir: o,
				gitdir: c = J(o, ".git"),
				ref: l,
				remote: f,
				remoteRef: u,
				url: d,
				corsProxy: h,
				depth: w = null,
				since: m = null,
				exclude: p = [],
				relative: g = !1,
				tags: y = !1,
				singleBranch: b = !1,
				headers: $ = {},
				prune: _ = !1,
				pruneTags: v = !1,
				cache: x = {},
			}) {
				try {
					return (
						eE("fs", t),
						eE("http", e),
						eE("gitdir", c),
						await r_({
							fs: new ex(t),
							cache: x,
							http: e,
							onProgress: r,
							onMessage: i,
							onAuth: a,
							onAuthSuccess: n,
							onAuthFailure: s,
							gitdir: c,
							ref: l,
							remote: f,
							remoteRef: u,
							url: d,
							corsProxy: h,
							depth: w,
							since: m,
							exclude: p,
							relative: g,
							tags: y,
							singleBranch: b,
							headers: $,
							prune: _,
							pruneTags: v,
						})
					);
				} catch (t) {
					throw ((t.caller = "git.fetch"), t);
				}
			}
			async function rK({ fs: t, dir: e, gitdir: r = J(e, ".git"), oids: i, cache: a = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oids", i), await rT({ fs: new ex(t), cache: a, gitdir: r, oids: i });
				} catch (t) {
					throw ((t.caller = "git.findMergeBase"), t);
				}
			}
			async function rZ({ fs: t, filepath: e }) {
				if (await t.exists(J(e, ".git"))) return e;
				{
					let r = N(e);
					if (r === e) throw new z(`git root for ${e}`);
					return rZ({ fs: t, filepath: r });
				}
			}
			async function rY({ fs: t, filepath: e }) {
				try {
					return eE("fs", t), eE("filepath", e), await rZ({ fs: new ex(t), filepath: e });
				} catch (t) {
					throw ((t.caller = "git.findRoot"), t);
				}
			}
			async function rJ({ fs: t, dir: e, gitdir: r = J(e, ".git"), path: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("path", i), await eF({ fs: new ex(t), gitdir: r, path: i });
				} catch (t) {
					throw ((t.caller = "git.getConfig"), t);
				}
			}
			async function rX({ fs: t, gitdir: e, path: r }) {
				return (await tm.get({ fs: t, gitdir: e })).getall(r);
			}
			async function rQ({ fs: t, dir: e, gitdir: r = J(e, ".git"), path: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("path", i), await rX({ fs: new ex(t), gitdir: r, path: i });
				} catch (t) {
					throw ((t.caller = "git.getConfigAll"), t);
				}
			}
			async function r0({ http: t, onAuth: e, onAuthSuccess: r, onAuthFailure: i, corsProxy: a, url: n, headers: s = {}, forPush: o = !1 }) {
				try {
					eE("http", t), eE("url", n);
					let c = rl.getRemoteHelperFor({ url: n }),
						l = await c.discover({ http: t, onAuth: e, onAuthSuccess: r, onAuthFailure: i, corsProxy: a, service: o ? "git-receive-pack" : "git-upload-pack", url: n, headers: s, protocolVersion: 1 }),
						f = { capabilities: [...l.capabilities] };
					for (let [t, e] of l.refs) {
						let r = t.split("/"),
							i = r.pop(),
							a = f;
						for (let t of r) (a[t] = a[t] || {}), (a = a[t]);
						a[i] = e;
					}
					for (let [t, e] of l.symrefs) {
						let r = t.split("/"),
							i = r.pop(),
							a = f;
						for (let t of r) (a[t] = a[t] || {}), (a = a[t]);
						a[i] = e;
					}
					return f;
				} catch (t) {
					throw ((t.caller = "git.getRemoteInfo"), t);
				}
			}
			function r1(t, e, r, i) {
				let a = [];
				for (let [n, s] of t.refs) {
					if (e && !n.startsWith(e)) continue;
					if (n.endsWith("^{}")) {
						if (i) {
							let t = n.replace("^{}", ""),
								e = a[a.length - 1],
								r = e.ref === t ? e : a.find((e) => e.ref === t);
							if (void 0 === r) throw Error("I did not expect this to happen");
							r.peeled = s;
						}
						continue;
					}
					let o = { ref: n, oid: s };
					r && t.symrefs.has(n) && (o.target = t.symrefs.get(n)), a.push(o);
				}
				return a;
			}
			async function r2({ http: t, onAuth: e, onAuthSuccess: r, onAuthFailure: i, corsProxy: a, url: n, headers: s = {}, forPush: o = !1, protocolVersion: c = 2 }) {
				try {
					eE("http", t), eE("url", n);
					let l = rl.getRemoteHelperFor({ url: n }),
						f = await l.discover({ http: t, onAuth: e, onAuthSuccess: r, onAuthFailure: i, corsProxy: a, service: o ? "git-receive-pack" : "git-upload-pack", url: n, headers: s, protocolVersion: c });
					if (2 === f.protocolVersion) return { protocolVersion: f.protocolVersion, capabilities: f.capabilities2 };
					let u = {};
					for (let t of f.capabilities) {
						let [e, r] = t.split("=");
						r ? (u[e] = r) : (u[e] = !0);
					}
					return { protocolVersion: 1, capabilities: u, refs: r1(f, void 0, !0, !0) };
				} catch (t) {
					throw ((t.caller = "git.getRemoteInfo2"), t);
				}
			}
			async function r8({ type: t, object: e, format: r = "content", oid: i }) {
				return "deflated" !== r && ("wrapped" !== r && (e = tk.wrap({ type: t, object: e })), (i = await k(e))), { oid: i, object: e };
			}
			async function r4({ object: t }) {
				try {
					eE("object", t), (t = "string" == typeof t ? d.from(t, "utf8") : d.from(t));
					let { oid: e, object: r } = await r8({ type: "blob", format: "content", object: t });
					return { oid: e, type: "blob", object: new Uint8Array(r), format: "wrapped" };
				} catch (t) {
					throw ((t.caller = "git.hashBlob"), t);
				}
			}
			async function r6({ fs: t, cache: e, onProgress: r, dir: i, gitdir: a, filepath: n }) {
				try {
					n = J(i, n);
					let s = await t.read(n),
						o = await tD.fromPack({ pack: s, getExternalRefDelta: (r) => tW({ fs: t, cache: e, gitdir: a, oid: r }), onProgress: r });
					return await t.write(n.replace(/\.pack$/, ".idx"), await o.toBuffer()), { oids: [...o.hashes] };
				} catch (t) {
					throw ((t.caller = "git.indexPack"), t);
				}
			}
			async function r3({ fs: t, onProgress: e, dir: r, gitdir: i = J(r, ".git"), filepath: a, cache: n = {} }) {
				try {
					return eE("fs", t), eE("dir", r), eE("gitdir", r), eE("filepath", a), await r6({ fs: new ex(t), cache: n, onProgress: e, dir: r, gitdir: i, filepath: a });
				} catch (t) {
					throw ((t.caller = "git.indexPack"), t);
				}
			}
			async function r9({ fs: t, bare: e = !1, dir: r, gitdir: i = e ? r : J(r, ".git"), defaultBranch: a = "master" }) {
				try {
					return eE("fs", t), eE("gitdir", i), e || eE("dir", r), await rv({ fs: new ex(t), bare: e, dir: r, gitdir: i, defaultBranch: a });
				} catch (t) {
					throw ((t.caller = "git.init"), t);
				}
			}
			async function r5({ fs: t, cache: e, gitdir: r, oid: i, ancestor: a, depth: n }) {
				let s = await ru.read({ fs: t, gitdir: r });
				if (!i) throw new t8("oid");
				if (!a) throw new t8("ancestor");
				if (i === a) return !1;
				let o = [i],
					c = new Set(),
					l = 0;
				for (; o.length;) {
					if (l++ === n) throw new tQ(n);
					let i = o.shift(),
						{ type: f, object: u } = await tW({ fs: t, cache: e, gitdir: r, oid: i });
					if ("commit" !== f) throw new W(i, f, "commit");
					let d = el.from(u).parse();
					for (let t of d.parent) if (t === a) return !0;
					if (!s.has(i)) for (let t of d.parent) c.has(t) || (o.push(t), c.add(t));
				}
				return !1;
			}
			async function r7({ fs: t, dir: e, gitdir: r = J(e, ".git"), oid: i, ancestor: a, depth: n = -1, cache: s = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oid", i), eE("ancestor", a), await r5({ fs: new ex(t), cache: s, gitdir: r, oid: i, ancestor: a, depth: n });
				} catch (t) {
					throw ((t.caller = "git.isDescendent"), t);
				}
			}
			async function it({ fs: t, dir: e, gitdir: r = J(e, ".git"), filepath: i }) {
				try {
					return eE("fs", t), eE("dir", e), eE("gitdir", r), eE("filepath", i), ej.isIgnored({ fs: new ex(t), dir: e, gitdir: r, filepath: i });
				} catch (t) {
					throw ((t.caller = "git.isIgnored"), t);
				}
			}
			async function ie({ fs: t, dir: e, gitdir: r = J(e, ".git"), remote: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), tb.listBranches({ fs: new ex(t), gitdir: r, remote: i });
				} catch (t) {
					throw ((t.caller = "git.listBranches"), t);
				}
			}
			async function ir({ fs: t, gitdir: e, ref: r, cache: i }) {
				if (!r)
					return C.acquire({ fs: t, gitdir: e, cache: i }, async function (t) {
						return t.entries.map((t) => t.path);
					});
				{
					let a = await tb.resolve({ gitdir: e, fs: t, ref: r }),
						n = [];
					return await ii({ fs: t, cache: i, gitdir: e, oid: a, filenames: n, prefix: "" }), n;
				}
			}
			async function ii({ fs: t, cache: e, gitdir: r, oid: i, filenames: a, prefix: n }) {
				let { tree: s } = await eH({ fs: t, cache: e, gitdir: r, oid: i });
				for (let i of s) "tree" === i.type ? await ii({ fs: t, cache: e, gitdir: r, oid: i.oid, filenames: a, prefix: J(n, i.path) }) : a.push(J(n, i.path));
			}
			async function ia({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i, cache: a = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), await ir({ fs: new ex(t), cache: a, gitdir: r, ref: i });
				} catch (t) {
					throw ((t.caller = "git.listFiles"), t);
				}
			}
			async function is({ fs: t, cache: e, gitdir: r, ref: i }) {
				let a;
				try {
					a = await tb.resolve({ gitdir: r, fs: t, ref: i });
				} catch (t) {
					if (t instanceof z) return [];
				}
				return (await eH({ fs: t, cache: e, gitdir: r, oid: a })).tree.map((t) => ({ target: t.path, note: t.oid }));
			}
			async function io({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i = "refs/notes/commits", cache: a = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("ref", i), await is({ fs: new ex(t), cache: a, gitdir: r, ref: i });
				} catch (t) {
					throw ((t.caller = "git.listNotes"), t);
				}
			}
			async function ic({ fs: t, gitdir: e }) {
				let r = await tm.get({ fs: t, gitdir: e });
				return Promise.all(
					(await r.getSubsections("remote")).map(async (t) => {
						let e = await r.get(`remote.${t}.url`);
						return { remote: t, url: e };
					})
				);
			}
			async function il({ fs: t, dir: e, gitdir: r = J(e, ".git") }) {
				try {
					return eE("fs", t), eE("gitdir", r), await ic({ fs: new ex(t), gitdir: r });
				} catch (t) {
					throw ((t.caller = "git.listRemotes"), t);
				}
			}
			async function iu(t) {
				let e;
				let r = re.streamReader(t),
					i = [];
				for (; !0 !== (e = await r());) {
					if (null === e) continue;
					let [t, r, ...a] = (e = e.toString("utf8").replace(/\n$/, "")).split(" "),
						n = { ref: r, oid: t };
					for (let t of a) {
						let [e, r] = t.split(":");
						"symref-target" === e ? (n.target = r) : "peeled" === e && (n.peeled = r);
					}
					i.push(n);
				}
				return i;
			}
			async function id({ prefix: t, symrefs: e, peelTags: r }) {
				let i = [];
				return (
					i.push(re.encode("command=ls-refs\n")),
					i.push(
						re.encode(`agent=${rp.agent}
`)
					),
					(r || e || t) && i.push(re.delim()),
					r && i.push(re.encode("peel")),
					e && i.push(re.encode("symrefs")),
					t && i.push(re.encode(`ref-prefix ${t}`)),
					i.push(re.flush()),
					i
				);
			}
			async function ih({ http: t, onAuth: e, onAuthSuccess: r, onAuthFailure: i, corsProxy: a, url: n, headers: s = {}, forPush: o = !1, protocolVersion: c = 2, prefix: l, symrefs: f, peelTags: u }) {
				try {
					eE("http", t), eE("url", n);
					let d = await rc.discover({ http: t, onAuth: e, onAuthSuccess: r, onAuthFailure: i, corsProxy: a, service: o ? "git-receive-pack" : "git-upload-pack", url: n, headers: s, protocolVersion: c });
					if (1 === d.protocolVersion) return r1(d, l, f, u);
					let h = await id({ prefix: l, symrefs: f, peelTags: u }),
						w = await rc.connect({ http: t, auth: d.auth, headers: s, corsProxy: a, service: o ? "git-receive-pack" : "git-upload-pack", url: n, body: h });
					return iu(w.body);
				} catch (t) {
					throw ((t.caller = "git.listServerRefs"), t);
				}
			}
			async function iw({ fs: t, dir: e, gitdir: r = J(e, ".git") }) {
				try {
					return eE("fs", t), eE("gitdir", r), tb.listTags({ fs: new ex(t), gitdir: r });
				} catch (t) {
					throw ((t.caller = "git.listTags"), t);
				}
			}
			async function im({ fs: t, cache: e, gitdir: r, oid: i }) {
				let { type: a, object: n } = await tW({ fs: t, cache: e, gitdir: r, oid: i });
				if ("tag" === a) return im({ fs: t, cache: e, gitdir: r, oid: (i = eo.from(n).parse().object) });
				if ("commit" !== a) throw new W(i, a, "commit");
				return { commit: el.from(n), oid: i };
			}
			async function ip({ fs: t, cache: e, gitdir: r, oid: i }) {
				let { commit: a, oid: n } = await im({ fs: t, cache: e, gitdir: r, oid: i });
				return { oid: n, commit: a.parse(), payload: a.withoutSignature() };
			}
			async function ig({ fs: t, cache: e, gitdir: r, oid: i, fileId: a }) {
				let n;
				if ("e69de29bb2d1d6434b8b29ae775ad8c2e48c5391" === a) return;
				let s = await ef({ fs: t, cache: e, gitdir: r, oid: i }),
					o = s.tree;
				return a === s.oid ? (n = s.path) : Array.isArray((n = await iy({ fs: t, cache: e, gitdir: r, tree: o, fileId: a, oid: i }))) && (0 === n.length ? (n = void 0) : 1 === n.length && (n = n[0])), n;
			}
			async function iy({ fs: t, cache: e, gitdir: r, tree: i, fileId: a, oid: n, filepaths: s = [], parentPath: o = "" }) {
				let c = i.entries().map(function (i) {
					let c;
					return (
						i.oid === a
							? ((c = J(o, i.path)), s.push(c))
							: "tree" === i.type &&
							(c = tW({ fs: t, cache: e, gitdir: r, oid: i.oid }).then(function ({ object: c }) {
								return iy({ fs: t, cache: e, gitdir: r, tree: tE.from(c), fileId: a, oid: n, filepaths: s, parentPath: J(o, i.path) });
							})),
						c
					);
				});
				return await Promise.all(c), s;
			}
			async function ib({ fs: t, cache: e, gitdir: r, filepath: i, ref: a, depth: n, since: s, force: o, follow: c }) {
				let l, f, u;
				let d = void 0 === s ? void 0 : Math.floor(s.valueOf() / 1e3),
					h = [],
					w = await ru.read({ fs: t, gitdir: r }),
					m = await tb.resolve({ fs: t, gitdir: r, ref: a }),
					p = [await ip({ fs: t, cache: e, gitdir: r, oid: m })];
				function g(t) {
					u && i && h.push(t);
				}
				for (; p.length > 0;) {
					let a = p.pop();
					if (void 0 !== d && a.commit.committer.timestamp <= d) break;
					if (i) {
						let n;
						try {
							(n = await eM({ fs: t, cache: e, gitdir: r, oid: a.commit.tree, filepath: i })), f && l !== n && h.push(f), (l = n), (f = a), (u = !0);
						} catch (n) {
							if (n instanceof z) {
								let s = c && l;
								if (s && (s = await ig({ fs: t, cache: e, gitdir: r, oid: a.commit.tree, fileId: l }))) {
									if (Array.isArray(s)) {
										if (f) {
											let a = await ig({ fs: t, cache: e, gitdir: r, oid: f.commit.tree, fileId: l });
											if (Array.isArray(a)) {
												if (1 === (s = s.filter((t) => -1 === a.indexOf(t))).length) (i = s = s[0]), f && h.push(f);
												else {
													(s = !1), f && h.push(f);
													break;
												}
											}
										}
									} else (i = s), f && h.push(f);
								}
								if (!s) {
									if (u && l && (h.push(f), !o)) break;
									if (!o && !c) throw n;
								}
								(f = a), (u = !1);
							} else throw n;
						}
					} else h.push(a);
					if (void 0 !== n && h.length === n) {
						g(a);
						break;
					}
					if (!w.has(a.oid))
						for (let i of a.commit.parent) {
							let a = await ip({ fs: t, cache: e, gitdir: r, oid: i });
							p.map((t) => t.oid).includes(a.oid) || p.push(a);
						}
					0 === p.length && g(a),
						p.sort((t, e) => {
							var r, i;
							return (r = t.commit), (i = e.commit), r.committer.timestamp - i.committer.timestamp;
						});
				}
				return h;
			}
			async function i$({ fs: t, dir: e, gitdir: r = J(e, ".git"), filepath: i, ref: a = "HEAD", depth: n, since: s, force: o, follow: c, cache: l = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("ref", a), await ib({ fs: new ex(t), cache: l, gitdir: r, filepath: i, ref: a, depth: n, since: s, force: o, follow: c });
				} catch (t) {
					throw ((t.caller = "git.log"), t);
				}
			}
			async function i_({
				fs: t,
				onSign: e,
				dir: r,
				gitdir: i = J(r, ".git"),
				ours: a,
				theirs: n,
				fastForward: s = !0,
				fastForwardOnly: o = !1,
				dryRun: c = !1,
				noUpdateBranch: l = !1,
				abortOnConflict: f = !0,
				message: u,
				author: d,
				committer: h,
				signingKey: w,
				cache: m = {},
				mergeDriver: p,
			}) {
				try {
					eE("fs", t), w && eE("onSign", e);
					let g = new ex(t),
						y = await eG({ fs: g, gitdir: i, author: d });
					if (!y && (!o || !s)) throw new t2("author");
					let b = await eq({ fs: g, gitdir: i, author: y, committer: h });
					if (!b && (!o || !s)) throw new t2("committer");
					return await rG({
						fs: g,
						cache: m,
						dir: r,
						gitdir: i,
						ours: a,
						theirs: n,
						fastForward: s,
						fastForwardOnly: o,
						dryRun: c,
						noUpdateBranch: l,
						abortOnConflict: f,
						message: u,
						author: y,
						committer: b,
						signingKey: w,
						onSign: e,
						mergeDriver: p,
					});
				} catch (t) {
					throw ((t.caller = "git.merge"), t);
				}
			}
			let iv = { commit: 16, tree: 32, blob: 48, tag: 64, ofs_delta: 96, ref_delta: 112 };
			async function ix({ fs: t, cache: e, dir: r, gitdir: i = J(r, ".git"), oids: a }) {
				let s = new n(),
					o = [];
				function c(t, e) {
					let r = d.from(t, e);
					o.push(r), s.update(r);
				}
				async function l({ stype: t, object: e }) {
					let r = iv[t],
						i = e.length,
						a = i > 15 ? 128 : 0,
						n = 15 & i;
					i >>>= 4;
					let s = (a | r | n).toString(16);
					for (c(s, "hex"); a;) c(rt(2, (s = (a = i > 127 ? 128 : 0) | (127 & i))), "hex"), (i >>>= 7);
					c(d.from(await eO(e)));
				}
				for (let r of (c("PACK"), c("00000002", "hex"), c(rt(8, a.length), "hex"), a)) {
					let { type: a, object: n } = await tW({ fs: t, cache: e, gitdir: i, oid: r });
					await l({ write: c, object: n, stype: a });
				}
				let f = s.digest();
				return o.push(f), o;
			}
			async function iE({ fs: t, cache: e, gitdir: r, oids: i, write: a }) {
				let n = await ix({ fs: t, cache: e, gitdir: r, oids: i }),
					s = d.from(await e5(n)),
					o = s.slice(-20).toString("hex"),
					c = `pack-${o}.pack`;
				return a ? (await t.write(J(r, `objects/pack/${c}`), s), { filename: c }) : { filename: c, packfile: new Uint8Array(s) };
			}
			async function ik({ fs: t, dir: e, gitdir: r = J(e, ".git"), oids: i, write: a = !1, cache: n = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oids", i), await iE({ fs: new ex(t), cache: n, gitdir: r, oids: i, write: a });
				} catch (t) {
					throw ((t.caller = "git.packObjects"), t);
				}
			}
			async function iS({
				fs: t,
				http: e,
				onProgress: r,
				onMessage: i,
				onAuth: a,
				onAuthSuccess: n,
				onAuthFailure: s,
				dir: o,
				gitdir: c = J(o, ".git"),
				ref: l,
				url: f,
				remote: u,
				remoteRef: d,
				prune: h = !1,
				pruneTags: w = !1,
				fastForward: m = !0,
				fastForwardOnly: p = !1,
				corsProxy: g,
				singleBranch: y,
				headers: b = {},
				author: $,
				committer: _,
				signingKey: v,
				cache: x = {},
			}) {
				try {
					eE("fs", t), eE("gitdir", c);
					let E = new ex(t),
						k = await eG({ fs: E, gitdir: c, author: $ });
					if (!k) throw new t2("author");
					let S = await eq({ fs: E, gitdir: c, author: k, committer: _ });
					if (!S) throw new t2("committer");
					return await rq({
						fs: E,
						cache: x,
						http: e,
						onProgress: r,
						onMessage: i,
						onAuth: a,
						onAuthSuccess: n,
						onAuthFailure: s,
						dir: o,
						gitdir: c,
						ref: l,
						url: f,
						remote: u,
						remoteRef: d,
						fastForward: m,
						fastForwardOnly: p,
						corsProxy: g,
						singleBranch: y,
						headers: b,
						author: k,
						committer: S,
						signingKey: v,
						prune: h,
						pruneTags: w,
					});
				} catch (t) {
					throw ((t.caller = "git.pull"), t);
				}
			}
			async function ij({ fs: t, cache: e, dir: r, gitdir: i = J(r, ".git"), start: a, finish: n }) {
				let s = await ru.read({ fs: t, gitdir: i }),
					o = new Set(),
					c = new Set();
				for (let e of a) o.add(await tb.resolve({ fs: t, gitdir: i, ref: e }));
				for (let e of n)
					try {
						let r = await tb.resolve({ fs: t, gitdir: i, ref: e });
						c.add(r);
					} catch (t) { }
				let l = new Set();
				async function f(r) {
					l.add(r);
					let { type: a, object: n } = await tW({ fs: t, cache: e, gitdir: i, oid: r });
					if ("tag" === a) return f(eo.from(n).headers().object);
					if ("commit" !== a) throw new W(r, a, "commit");
					if (!s.has(r)) for (r of el.from(n).headers().parent) c.has(r) || l.has(r) || (await f(r));
				}
				for (let t of o) await f(t);
				return l;
			}
			async function iR({ fs: t, cache: e, dir: r, gitdir: i = J(r, ".git"), oids: a }) {
				let n = new Set();
				async function s(r) {
					if (n.has(r)) return;
					n.add(r);
					let { type: a, object: o } = await tW({ fs: t, cache: e, gitdir: i, oid: r });
					if ("tag" === a) {
						let t = eo.from(o).headers().object;
						await s(t);
					} else if ("commit" === a) {
						let t = el.from(o).headers().tree;
						await s(t);
					} else if ("tree" === a) for (let t of tE.from(o)) "blob" === t.type && n.add(t.oid), "tree" === t.type && (await s(t.oid));
				}
				for (let t of a) await s(t);
				return n;
			}
			async function iI(t) {
				let e = {},
					r = "",
					i = re.streamReader(t),
					a = await i();
				for (; !0 !== a;) null !== a && (r += a.toString("utf8") + "\n"), (a = await i());
				let n = r.toString("utf8").split("\n");
				if (!(a = n.shift()).startsWith("unpack ")) throw new t6('unpack ok" or "unpack [error message]', a);
				for (let t of ((e.ok = "unpack ok" === a), e.ok || (e.error = a.slice(7)), (e.refs = {}), n)) {
					if ("" === t.trim()) continue;
					let r = t.slice(0, 2),
						i = t.slice(3),
						a = i.indexOf(" ");
					-1 === a && (a = i.length);
					let n = i.slice(0, a),
						s = i.slice(a + 1);
					e.refs[n] = { ok: "ok" === r, error: s };
				}
				return e;
			}
			async function iO({ capabilities: t = [], triplets: e = [] }) {
				let r = [],
					i = `\0 ${t.join(" ")}`;
				for (let t of e)
					r.push(
						re.encode(`${t.oldoid} ${t.oid} ${t.fullRef}${i}
`)
					),
						(i = "");
				return r.push(re.flush()), r;
			}
			async function iP({
				fs: t,
				cache: e,
				http: r,
				onProgress: i,
				onMessage: a,
				onAuth: n,
				onAuthSuccess: s,
				onAuthFailure: o,
				gitdir: c,
				ref: l,
				remoteRef: f,
				remote: u,
				url: d,
				force: h = !1,
				delete: w = !1,
				corsProxy: m,
				headers: p = {},
			}) {
				let g;
				let y = l || (await e6({ fs: t, gitdir: c }));
				if (void 0 === y) throw new t8("ref");
				let b = await tm.get({ fs: t, gitdir: c });
				u = u || (await b.get(`branch.${y}.pushRemote`)) || (await b.get("remote.pushDefault")) || (await b.get(`branch.${y}.remote`)) || "origin";
				let $ = d || (await b.get(`remote.${u}.pushurl`)) || (await b.get(`remote.${u}.url`));
				if (void 0 === $) throw new t8("remote OR url");
				let _ = f || (await b.get(`branch.${y}.merge`));
				if (void 0 === $) throw new t8("remoteRef");
				void 0 === m && (m = await b.get("http.corsProxy"));
				let v = await tb.expand({ fs: t, gitdir: c, ref: y }),
					x = w ? "0000000000000000000000000000000000000000" : await tb.resolve({ fs: t, gitdir: c, ref: v }),
					E = rl.getRemoteHelperFor({ url: $ }),
					k = await E.discover({ http: r, onAuth: n, onAuthSuccess: s, onAuthFailure: o, corsProxy: m, service: "git-receive-pack", url: $, headers: p, protocolVersion: 1 }),
					S = k.auth;
				if (_)
					try {
						g = await tb.expandAgainstMap({ ref: _, map: k.refs });
					} catch (t) {
						if (t instanceof z) g = _.startsWith("refs/") ? _ : `refs/heads/${_}`;
						else throw t;
					}
				else g = v;
				let j = k.refs.get(g) || "0000000000000000000000000000000000000000",
					R = !k.capabilities.has("no-thin"),
					I = new Set();
				if (!w) {
					let r = [...k.refs.values()],
						i = new Set();
					if ("0000000000000000000000000000000000000000" !== j) {
						let a = await rT({ fs: t, cache: e, gitdir: c, oids: [x, j] });
						for (let t of a) r.push(t);
						R && (i = await iR({ fs: t, cache: e, gitdir: c, oids: a }));
					}
					if (!r.includes(x)) {
						let i = await ij({ fs: t, cache: e, gitdir: c, start: [x], finish: r });
						I = await iR({ fs: t, cache: e, gitdir: c, oids: i });
					}
					if (R) {
						try {
							let r = await tb.resolve({ fs: t, gitdir: c, ref: `refs/remotes/${u}/HEAD`, depth: 2 }),
								{ oid: a } = await tb.resolveAgainstMap({ ref: r.replace(`refs/remotes/${u}/`, ""), fullref: r, map: k.refs });
							for (let r of await iR({ fs: t, cache: e, gitdir: c, oids: [a] })) i.add(r);
						} catch (t) { }
						for (let t of i) I.delete(t);
					}
					if ((x === j && (h = !0), !h)) {
						if (v.startsWith("refs/tags") && "0000000000000000000000000000000000000000" !== j) throw new t3("tag-exists");
						if ("0000000000000000000000000000000000000000" !== x && "0000000000000000000000000000000000000000" !== j && !(await r5({ fs: t, cache: e, gitdir: c, oid: x, ancestor: j, depth: -1 })))
							throw new t3("not-fast-forward");
					}
				}
				let O = rm([...k.capabilities], ["report-status", "side-band-64k", `agent=${rp.agent}`]),
					P = await iO({ capabilities: O, triplets: [{ oldoid: j, oid: x, fullRef: g }] }),
					A = w ? [] : await ix({ fs: t, cache: e, gitdir: c, oids: [...I] }),
					U = await E.connect({ http: r, onProgress: i, corsProxy: m, service: "git-receive-pack", url: $, auth: S, headers: p, body: [...P, ...A] }),
					{ packfile: C, progress: B } = await rb.demux(U.body);
				a &&
					e9(ry(B), async (t) => {
						await a(t);
					});
				let N = await iI(C);
				if ((U.headers && (N.headers = U.headers), u && N.ok && N.refs[g].ok)) {
					let e = `refs/remotes/${u}/${g.replace("refs/heads", "")}`;
					w ? await tb.deleteRef({ fs: t, gitdir: c, ref: e }) : await tb.writeRef({ fs: t, gitdir: c, ref: e, value: x });
				}
				if (N.ok && Object.values(N.refs).every((t) => t.ok)) return N;
				throw new tZ(
					Object.entries(N.refs)
						.filter(([t, e]) => !e.ok)
						.map(
							([t, e]) => `
  - ${t}: ${e.error}`
						)
						.join(""),
					N
				);
			}
			async function iA({
				fs: t,
				http: e,
				onProgress: r,
				onMessage: i,
				onAuth: a,
				onAuthSuccess: n,
				onAuthFailure: s,
				dir: o,
				gitdir: c = J(o, ".git"),
				ref: l,
				remoteRef: f,
				remote: u = "origin",
				url: d,
				force: h = !1,
				delete: w = !1,
				corsProxy: m,
				headers: p = {},
				cache: g = {},
			}) {
				try {
					return (
						eE("fs", t),
						eE("http", e),
						eE("gitdir", c),
						await iP({
							fs: new ex(t),
							cache: g,
							http: e,
							onProgress: r,
							onMessage: i,
							onAuth: a,
							onAuthSuccess: n,
							onAuthFailure: s,
							gitdir: c,
							ref: l,
							remoteRef: f,
							remote: u,
							url: d,
							force: h,
							delete: w,
							corsProxy: m,
							headers: p,
						})
					);
				} catch (t) {
					throw ((t.caller = "git.push"), t);
				}
			}
			async function iU({ fs: t, cache: e, gitdir: r, oid: i }) {
				let { type: a, object: n } = await tW({ fs: t, cache: e, gitdir: r, oid: i });
				if ("tag" === a) return iU({ fs: t, cache: e, gitdir: r, oid: (i = eo.from(n).parse().object) });
				if ("blob" !== a) throw new W(i, a, "blob");
				return { oid: i, blob: new Uint8Array(n) };
			}
			async function iC({ fs: t, cache: e, gitdir: r, oid: i, filepath: a }) {
				return void 0 !== a && (i = await eM({ fs: t, cache: e, gitdir: r, oid: i, filepath: a })), await iU({ fs: t, cache: e, gitdir: r, oid: i });
			}
			async function iB({ fs: t, dir: e, gitdir: r = J(e, ".git"), oid: i, filepath: a, cache: n = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oid", i), await iC({ fs: new ex(t), cache: n, gitdir: r, oid: i, filepath: a });
				} catch (t) {
					throw ((t.caller = "git.readBlob"), t);
				}
			}
			async function iN({ fs: t, dir: e, gitdir: r = J(e, ".git"), oid: i, cache: a = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oid", i), await ip({ fs: new ex(t), cache: a, gitdir: r, oid: i });
				} catch (t) {
					throw ((t.caller = "git.readCommit"), t);
				}
			}
			async function iD({ fs: t, cache: e, gitdir: r, ref: i = "refs/notes/commits", oid: a }) {
				let n = await tb.resolve({ gitdir: r, fs: t, ref: i }),
					{ blob: s } = await iC({ fs: t, cache: e, gitdir: r, oid: n, filepath: a });
				return s;
			}
			async function iM({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i = "refs/notes/commits", oid: a, cache: n = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("ref", i), eE("oid", a), await iD({ fs: new ex(t), cache: n, gitdir: r, ref: i, oid: a });
				} catch (t) {
					throw ((t.caller = "git.readNote"), t);
				}
			}
			async function iT({ fs: t, dir: e, gitdir: r = J(e, ".git"), oid: i, format: a = "parsed", filepath: n, encoding: s, cache: o = {} }) {
				try {
					eE("fs", t), eE("gitdir", r), eE("oid", i);
					let e = new ex(t);
					void 0 !== n && (i = await eM({ fs: e, cache: o, gitdir: r, oid: i, filepath: n }));
					let c = await tW({ fs: e, cache: o, gitdir: r, oid: i, format: "parsed" === a ? "content" : a });
					if (((c.oid = i), "parsed" === a))
						switch (((c.format = "parsed"), c.type)) {
							case "commit":
								c.object = el.from(c.object).parse();
								break;
							case "tree":
								c.object = tE.from(c.object).entries();
								break;
							case "blob":
								s ? (c.object = c.object.toString(s)) : ((c.object = new Uint8Array(c.object)), (c.format = "content"));
								break;
							case "tag":
								c.object = eo.from(c.object).parse();
								break;
							default:
								throw new W(c.oid, c.type, "blob|commit|tag|tree");
						}
					else ("deflated" === c.format || "wrapped" === c.format) && (c.type = c.format);
					return c;
				} catch (t) {
					throw ((t.caller = "git.readObject"), t);
				}
			}
			async function iH({ fs: t, cache: e, gitdir: r, oid: i }) {
				let { type: a, object: n } = await tW({ fs: t, cache: e, gitdir: r, oid: i, format: "content" });
				if ("tag" !== a) throw new W(i, a, "tag");
				let s = eo.from(n);
				return { oid: i, tag: s.parse(), payload: s.payload() };
			}
			async function iz({ fs: t, dir: e, gitdir: r = J(e, ".git"), oid: i, cache: a = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oid", i), await iH({ fs: new ex(t), cache: a, gitdir: r, oid: i });
				} catch (t) {
					throw ((t.caller = "git.readTag"), t);
				}
			}
			async function iW({ fs: t, dir: e, gitdir: r = J(e, ".git"), oid: i, filepath: a, cache: n = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("oid", i), await eH({ fs: new ex(t), cache: n, gitdir: r, oid: i, filepath: a });
				} catch (t) {
					throw ((t.caller = "git.readTree"), t);
				}
			}
			async function iF({ fs: t, dir: e, gitdir: r = J(e, ".git"), filepath: i, cache: a = {} }) {
				try {
					eE("fs", t),
						eE("gitdir", r),
						eE("filepath", i),
						await C.acquire({ fs: new ex(t), gitdir: r, cache: a }, async function (t) {
							t.delete({ filepath: i });
						});
				} catch (t) {
					throw ((t.caller = "git.remove"), t);
				}
			}
			async function iG({ fs: t, cache: e, onSign: r, gitdir: i, ref: a = "refs/notes/commits", oid: n, author: s, committer: o, signingKey: c }) {
				let l;
				try {
					l = await tb.resolve({ gitdir: i, fs: t, ref: a });
				} catch (t) {
					if (!(t instanceof z)) throw t;
				}
				let f = (await eH({ fs: t, gitdir: i, oid: l || "4b825dc642cb6eb9a060e54bf8d69288fbee4904" })).tree;
				f = f.filter((t) => t.path !== n);
				let u = await ez({ fs: t, gitdir: i, tree: f });
				return await eN({
					fs: t,
					cache: e,
					onSign: r,
					gitdir: i,
					ref: a,
					tree: u,
					parent: l && [l],
					message: `Note removed by 'isomorphic-git removeNote'
`,
					author: s,
					committer: o,
					signingKey: c,
				});
			}
			async function iq({ fs: t, onSign: e, dir: r, gitdir: i = J(r, ".git"), ref: a = "refs/notes/commits", oid: n, author: s, committer: o, signingKey: c, cache: l = {} }) {
				try {
					eE("fs", t), eE("gitdir", i), eE("oid", n);
					let r = new ex(t),
						f = await eG({ fs: r, gitdir: i, author: s });
					if (!f) throw new t2("author");
					let u = await eq({ fs: r, gitdir: i, author: f, committer: o });
					if (!u) throw new t2("committer");
					return await iG({ fs: r, cache: l, onSign: e, gitdir: i, ref: a, oid: n, author: f, committer: u, signingKey: c });
				} catch (t) {
					throw ((t.caller = "git.removeNote"), t);
				}
			}
			async function iL({ fs: t, gitdir: e, oldref: r, ref: i, checkout: a = !1 }) {
				if (i !== f.clean(i)) throw new tX(i, f.clean(i));
				if (r !== f.clean(r)) throw new tX(r, f.clean(r));
				let n = `refs/heads/${r}`,
					s = `refs/heads/${i}`;
				if (await tb.exists({ fs: t, gitdir: e, ref: s })) throw new tF("branch", i, !1);
				let o = await tb.resolve({ fs: t, gitdir: e, ref: n, depth: 1 });
				await tb.writeRef({ fs: t, gitdir: e, ref: s, value: o }), await tb.deleteRef({ fs: t, gitdir: e, ref: n });
				let c = (await e6({ fs: t, gitdir: e, fullname: !0 })) === n;
				(a || c) && (await tb.writeSymbolicRef({ fs: t, gitdir: e, ref: "HEAD", value: s }));
			}
			async function iV({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i, oldref: a, checkout: n = !1 }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("ref", i), eE("oldref", a), await iL({ fs: new ex(t), gitdir: r, ref: i, oldref: a, checkout: n });
				} catch (t) {
					throw ((t.caller = "git.renameBranch"), t);
				}
			}
			async function iK({ gitdir: t, type: e, object: r }) {
				return k(tk.wrap({ type: e, object: r }));
			}
			async function iZ({ fs: t, dir: e, gitdir: r = J(e, ".git"), filepath: i, ref: a, cache: n = {} }) {
				try {
					let s, o;
					eE("fs", t), eE("gitdir", r), eE("filepath", i);
					let c = new ex(t);
					try {
						s = await tb.resolve({ fs: c, gitdir: r, ref: a || "HEAD" });
					} catch (t) {
						if (a) throw t;
					}
					if (s)
						try {
							s = await eM({ fs: c, cache: n, gitdir: r, oid: s, filepath: i });
						} catch (t) {
							s = null;
						}
					let l = { ctime: new Date(0), mtime: new Date(0), dev: 0, ino: 0, mode: 0, uid: 0, gid: 0, size: 0 },
						f = e && (await c.read(J(e, i)));
					f && ((o = await iK({ gitdir: r, type: "blob", object: f })), s === o && (l = await c.lstat(J(e, i)))),
						await C.acquire({ fs: c, gitdir: r, cache: n }, async function (t) {
							t.delete({ filepath: i }), s && t.insert({ filepath: i, stats: l, oid: s });
						});
				} catch (t) {
					throw ((t.caller = "git.reset"), t);
				}
			}
			async function iY({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i, depth: a }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("ref", i), await tb.resolve({ fs: new ex(t), gitdir: r, ref: i, depth: a });
				} catch (t) {
					throw ((t.caller = "git.resolveRef"), t);
				}
			}
			async function iJ({ fs: t, dir: e, gitdir: r = J(e, ".git"), path: i, value: a, append: n = !1 }) {
				try {
					eE("fs", t), eE("gitdir", r), eE("path", i);
					let e = new ex(t),
						s = await tm.get({ fs: e, gitdir: r });
					n ? await s.append(i, a) : await s.set(i, a), await tm.save({ fs: e, gitdir: r, config: s });
				} catch (t) {
					throw ((t.caller = "git.setConfig"), t);
				}
			}
			async function iX({ fs: t, dir: e, gitdir: r = J(e, ".git"), filepath: i, cache: a = {} }) {
				try {
					eE("fs", t), eE("gitdir", r), eE("filepath", i);
					let n = new ex(t);
					if (await ej.isIgnored({ fs: n, gitdir: r, dir: e, filepath: i })) return "ignored";
					let s = await i0({ fs: n, cache: a, gitdir: r }),
						o = await iQ({ fs: n, cache: a, gitdir: r, tree: s, path: i }),
						c = await C.acquire({ fs: n, gitdir: r, cache: a }, async function (t) {
							for (let e of t) if (e.path === i) return e;
							return null;
						}),
						l = await n.lstat(J(e, i)),
						f = null !== o,
						u = null !== c,
						d = null !== l,
						h = async () => {
							if (u && !I(c, l)) return c.oid;
							{
								let t = await n.read(J(e, i)),
									s = await iK({ gitdir: r, type: "blob", object: t });
								return (
									u &&
									c.oid === s &&
									-1 !== l.size &&
									C.acquire({ fs: n, gitdir: r, cache: a }, async function (t) {
										t.insert({ filepath: i, stats: l, oid: s });
									}),
									s
								);
							}
						};
					if (!f && !d && !u) return "absent";
					if (!f && !d && u) return "*absent";
					if (!f && d && !u) return "*added";
					if (!f && d && u) return (await h()) === c.oid ? "added" : "*added";
					if (f && !d && !u) return "deleted";
					if (f && !d && u) return c.oid, "*deleted";
					if (f && d && !u) return (await h()) === o ? "*undeleted" : "*undeletemodified";
					if (f && d && u) {
						let t = await h();
						if (t === o) return t === c.oid ? "unmodified" : "*unmodified";
						return t === c.oid ? "modified" : "*modified";
					}
				} catch (t) {
					throw ((t.caller = "git.status"), t);
				}
			}
			async function iQ({ fs: t, cache: e, gitdir: r, tree: i, path: a }) {
				"string" == typeof a && (a = a.split("/"));
				let n = a.shift();
				for (let s of i)
					if (s.path === n) {
						if (0 === a.length) return s.oid;
						let { type: i, object: n } = await tW({ fs: t, cache: e, gitdir: r, oid: s.oid });
						if ("tree" === i) return iQ({ fs: t, cache: e, gitdir: r, tree: tE.from(n), path: a });
						if ("blob" === i) throw new W(s.oid, i, "blob", a.join("/"));
					}
				return null;
			}
			async function i0({ fs: t, cache: e, gitdir: r }) {
				let i;
				try {
					i = await tb.resolve({ fs: t, gitdir: r, ref: "HEAD" });
				} catch (t) {
					if (t instanceof z) return [];
				}
				let { tree: a } = await eH({ fs: t, cache: e, gitdir: r, oid: i });
				return a;
			}
			async function i1({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i = "HEAD", filepaths: a = ["."], filter: n, cache: s = {}, ignored: o = !1 }) {
				try {
					eE("fs", t), eE("gitdir", r), eE("ref", i);
					let c = new ex(t);
					return await eg({
						fs: c,
						cache: s,
						dir: e,
						gitdir: r,
						trees: [ed({ ref: i }), ew(), H()],
						map: async function (t, [r, i, s]) {
							let l;
							if ((!r && !s && i && !o && (await ej.isIgnored({ fs: c, dir: e, filepath: t }))) || !a.some((e) => eQ(t, e))) return null;
							if (n && !n(t)) return;
							let [f, u, d] = await Promise.all([r && r.type(), i && i.type(), s && s.type()]),
								h = [f, u, d].includes("blob");
							if (("tree" === f || "special" === f) && !h) return;
							if ("commit" === f) return null;
							if (("tree" === u || "special" === u) && !h) return;
							if ("commit" === d) return null;
							if (("tree" === d || "special" === d) && !h) return;
							let w = "blob" === f ? await r.oid() : void 0,
								m = "blob" === d ? await s.oid() : void 0;
							"blob" !== f && "blob" === u && "blob" !== d ? (l = "42") : "blob" === u && (l = await i.oid());
							let p = [void 0, w, l, m],
								g = p.map((t) => p.indexOf(t));
							return g.shift(), [t, ...g];
						},
					});
				} catch (t) {
					throw ((t.caller = "git.statusMatrix"), t);
				}
			}
			async function i2({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i, object: a, force: n = !1 }) {
				try {
					eE("fs", t), eE("gitdir", r), eE("ref", i);
					let e = new ex(t);
					if (void 0 === i) throw new t8("ref");
					i = i.startsWith("refs/tags/") ? i : `refs/tags/${i}`;
					let s = await tb.resolve({ fs: e, gitdir: r, ref: a || "HEAD" });
					if (!n && (await tb.exists({ fs: e, gitdir: r, ref: i }))) throw new tF("tag", i);
					await tb.writeRef({ fs: e, gitdir: r, ref: i, value: s });
				} catch (t) {
					throw ((t.caller = "git.tag"), t);
				}
			}
			async function i8({ fs: t, dir: e, gitdir: r = J(e, ".git"), cache: i = {}, filepath: a, oid: n, mode: s, add: o, remove: c, force: l }) {
				try {
					let f;
					eE("fs", t), eE("gitdir", r), eE("filepath", a);
					let u = new ex(t);
					if (c)
						return await C.acquire({ fs: u, gitdir: r, cache: i }, async function (t) {
							let r;
							if (!l && (r = await u.lstat(J(e, a)))) {
								if (r.isDirectory()) throw new tJ("directory");
								return;
							}
							t.has({ filepath: a }) && t.delete({ filepath: a });
						});
					if (!n) {
						if (!(f = await u.lstat(J(e, a)))) throw new z(`file at "${a}" on disk and "remove" not set`);
						if (f.isDirectory()) throw new tJ("directory");
					}
					return await C.acquire({ fs: u, gitdir: r, cache: i }, async function (t) {
						if (!o && !t.has({ filepath: a })) throw new z(`file at "${a}" in index and "add" not set`);
						let i = { ctime: new Date(0), mtime: new Date(0), dev: 0, ino: 0, mode: s, uid: 0, gid: 0, size: 0 };
						if (!n) {
							let t = (i = f).isSymbolicLink() ? await u.readlink(J(e, a)) : await u.read(J(e, a));
							n = await eA({ fs: u, gitdir: r, type: "blob", format: "content", object: t });
						}
						return t.insert({ filepath: a, oid: n, stats: i }), n;
					});
				} catch (t) {
					throw ((t.caller = "git.updateIndex"), t);
				}
			}
			function i4() {
				try {
					return rp.version;
				} catch (t) {
					throw ((t.caller = "git.version"), t);
				}
			}
			async function i6({ fs: t, dir: e, gitdir: r = J(e, ".git"), trees: i, map: a, reduce: n, iterate: s, cache: o = {} }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("trees", i), await eg({ fs: new ex(t), cache: o, dir: e, gitdir: r, trees: i, map: a, reduce: n, iterate: s });
				} catch (t) {
					throw ((t.caller = "git.walk"), t);
				}
			}
			async function i3({ fs: t, dir: e, gitdir: r = J(e, ".git"), blob: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("blob", i), await eA({ fs: new ex(t), gitdir: r, type: "blob", object: i, format: "content" });
				} catch (t) {
					throw ((t.caller = "git.writeBlob"), t);
				}
			}
			async function i9({ fs: t, gitdir: e, commit: r }) {
				let i = el.from(r).toObject();
				return await eA({ fs: t, gitdir: e, type: "commit", object: i, format: "content" });
			}
			async function i5({ fs: t, dir: e, gitdir: r = J(e, ".git"), commit: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("commit", i), await i9({ fs: new ex(t), gitdir: r, commit: i });
				} catch (t) {
					throw ((t.caller = "git.writeCommit"), t);
				}
			}
			async function i7({ fs: t, dir: e, gitdir: r = J(e, ".git"), type: i, object: a, format: n = "parsed", oid: s, encoding: o }) {
				try {
					let e = new ex(t);
					if ("parsed" === n) {
						switch (i) {
							case "commit":
								a = el.from(a).toObject();
								break;
							case "tree":
								a = tE.from(a).toObject();
								break;
							case "blob":
								a = d.from(a, o);
								break;
							case "tag":
								a = eo.from(a).toObject();
								break;
							default:
								throw new W(s || "", i, "blob|commit|tag|tree");
						}
						n = "content";
					}
					return (s = await eA({ fs: e, gitdir: r, type: i, object: a, oid: s, format: n }));
				} catch (t) {
					throw ((t.caller = "git.writeObject"), t);
				}
			}
			async function at({ fs: t, dir: e, gitdir: r = J(e, ".git"), ref: i, value: a, force: n = !1, symbolic: s = !1 }) {
				try {
					eE("fs", t), eE("gitdir", r), eE("ref", i), eE("value", a);
					let e = new ex(t);
					if (i !== f.clean(i)) throw new tX(i, f.clean(i));
					if (!n && (await tb.exists({ fs: e, gitdir: r, ref: i }))) throw new tF("ref", i);
					s ? await tb.writeSymbolicRef({ fs: e, gitdir: r, ref: i, value: a }) : ((a = await tb.resolve({ fs: e, gitdir: r, ref: a })), await tb.writeRef({ fs: e, gitdir: r, ref: i, value: a }));
				} catch (t) {
					throw ((t.caller = "git.writeRef"), t);
				}
			}
			async function ae({ fs: t, gitdir: e, tag: r }) {
				let i = eo.from(r).toObject();
				return await eA({ fs: t, gitdir: e, type: "tag", object: i, format: "content" });
			}
			async function ar({ fs: t, dir: e, gitdir: r = J(e, ".git"), tag: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("tag", i), await ae({ fs: new ex(t), gitdir: r, tag: i });
				} catch (t) {
					throw ((t.caller = "git.writeTag"), t);
				}
			}
			async function ai({ fs: t, dir: e, gitdir: r = J(e, ".git"), tree: i }) {
				try {
					return eE("fs", t), eE("gitdir", r), eE("tree", i), await ez({ fs: new ex(t), gitdir: r, tree: i });
				} catch (t) {
					throw ((t.caller = "git.writeTree"), t);
				}
			}
			e.default = {
				Errors: ei,
				STAGE: H,
				TREE: ed,
				WORKDIR: ew,
				add: eC,
				abortMerge: eS,
				addNote: eL,
				addRemote: eK,
				annotatedTag: eY,
				branch: eX,
				checkout: e2,
				clone: rE,
				commit: rk,
				getConfig: rJ,
				getConfigAll: rQ,
				setConfig: iJ,
				currentBranch: rS,
				deleteBranch: rR,
				deleteRef: rI,
				deleteRemote: rP,
				deleteTag: rU,
				expandOid: rD,
				expandRef: rM,
				fastForward: rL,
				fetch: rV,
				findMergeBase: rK,
				findRoot: rY,
				getRemoteInfo: r0,
				getRemoteInfo2: r2,
				hashBlob: r4,
				indexPack: r3,
				init: r9,
				isDescendent: r7,
				isIgnored: it,
				listBranches: ie,
				listFiles: ia,
				listNotes: io,
				listRemotes: il,
				listServerRefs: ih,
				listTags: iw,
				log: i$,
				merge: i_,
				packObjects: ik,
				pull: iS,
				push: iA,
				readBlob: iB,
				readCommit: iN,
				readNote: iM,
				readObject: iT,
				readTag: iz,
				readTree: iW,
				remove: iF,
				removeNote: iq,
				renameBranch: iV,
				resetIndex: iZ,
				updateIndex: i8,
				resolveRef: iY,
				status: iX,
				statusMatrix: i1,
				tag: i2,
				version: i4,
				walk: i6,
				writeBlob: i3,
				writeCommit: i5,
				writeObject: i7,
				writeRef: at,
				writeTag: ar,
				writeTree: ai,
			};
		},
	},
]);






// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8375],{10764:function(t,e,r){let i;r.r(e),r.d(e,{Errors:function(){return ei},STAGE:function(){return H},TREE:function(){return ed},WORKDIR:function(){return ew},abortMerge:function(){return eS},add:function(){return eC},addNote:function(){return eL},addRemote:function(){return eK},annotatedTag:function(){return eY},branch:function(){return eX},checkout:function(){return e2},clone:function(){return rE},commit:function(){return rk},currentBranch:function(){return rS},deleteBranch:function(){return rR},deleteRef:function(){return rI},deleteRemote:function(){return rP},deleteTag:function(){return rU},expandOid:function(){return rD},expandRef:function(){return rM},fastForward:function(){return rL},fetch:function(){return rV},findMergeBase:function(){return rK},findRoot:function(){return rY},getConfig:function(){return rJ},getConfigAll:function(){return rQ},getRemoteInfo:function(){return r0},getRemoteInfo2:function(){return r2},hashBlob:function(){return r4},indexPack:function(){return r3},init:function(){return r9},isDescendent:function(){return r7},isIgnored:function(){return it},listBranches:function(){return ie},listFiles:function(){return ia},listNotes:function(){return io},listRemotes:function(){return il},listServerRefs:function(){return ih},listTags:function(){return iw},log:function(){return i$},merge:function(){return i_},packObjects:function(){return ik},pull:function(){return iS},push:function(){return iA},readBlob:function(){return iB},readCommit:function(){return iN},readNote:function(){return iM},readObject:function(){return iT},readTag:function(){return iz},readTree:function(){return iW},remove:function(){return iF},removeNote:function(){return iq},renameBranch:function(){return iV},resetIndex:function(){return iZ},resolveRef:function(){return iY},setConfig:function(){return iJ},status:function(){return iX},statusMatrix:function(){return i1},tag:function(){return i2},updateIndex:function(){return i8},version:function(){return i4},walk:function(){return i6},writeBlob:function(){return i3},writeCommit:function(){return i5},writeObject:function(){return i7},writeRef:function(){return at},writeTag:function(){return ar},writeTree:function(){return ai}});var a=r(99758),n=r(18336),s=r(34606),o=r(99591),c=r(12352),l=r(15151),f=r(61990),u=r(99027),d=r(48764).Buffer,h=r(34155);class w extends Error{constructor(t){super(t),this.caller=""}toJSON(){return{code:this.code,data:this.data,caller:this.caller,message:this.message,stack:this.stack}}fromJSON(t){let e=new w(t.message);return e.code=t.code,e.data=t.data,e.caller=t.caller,e.stack=t.stack,e}get isIsomorphicGitError(){return!0}}class m extends w{constructor(t){super(`Modifying the index is not possible because you have unmerged files: ${t.toString}. Fix them up in the work tree, and then use 'git add/rm as appropriate to mark resolution and make a commit.`),this.code=this.name=m.code,this.data={filepaths:t}}}m.code="UnmergedPathsError";class p extends w{constructor(t){super(`An internal error caused this command to fail. Please file a bug report at https://github.com/isomorphic-git/isomorphic-git/issues with this error message: ${t}`),this.code=this.name=p.code,this.data={message:t}}}p.code="InternalError";class g extends w{constructor(t){super(`The filepath "${t}" contains unsafe character sequences`),this.code=this.name=g.code,this.data={filepath:t}}}g.code="UnsafeFilepathError";class y{constructor(t){this.buffer=t,this._start=0}eof(){return this._start>=this.buffer.length}tell(){return this._start}seek(t){this._start=t}slice(t){let e=this.buffer.slice(this._start,this._start+t);return this._start+=t,e}toString(t,e){let r=this.buffer.toString(t,this._start,this._start+e);return this._start+=e,r}write(t,e,r){let i=this.buffer.write(t,this._start,e,r);return this._start+=e,i}copy(t,e,r){let i=t.copy(this.buffer,this._start,e,r);return this._start+=i,i}readUInt8(){let t=this.buffer.readUInt8(this._start);return this._start+=1,t}writeUInt8(t){let e=this.buffer.writeUInt8(t,this._start);return this._start+=1,e}readUInt16BE(){let t=this.buffer.readUInt16BE(this._start);return this._start+=2,t}writeUInt16BE(t){let e=this.buffer.writeUInt16BE(t,this._start);return this._start+=2,e}readUInt32BE(){let t=this.buffer.readUInt32BE(this._start);return this._start+=4,t}writeUInt32BE(t){let e=this.buffer.writeUInt32BE(t,this._start);return this._start+=4,e}}function b(t,e){return-(t<e)||+(t>e)}function $(t,e){return b(t.path,e.path)}function _(t){let e=t>0?t>>12:0;4!==e&&8!==e&&10!==e&&14!==e&&(e=8);let r=511&t;return r=73&r?493:420,8!==e&&(r=0),(e<<12)+r}function v(t,e,r,i){if(void 0!==t&&void 0!==e)return[t,e];void 0===r&&(r=i.valueOf());let a=Math.floor(r/1e3),n=(r-1e3*a)*1e6;return[a,n]}function x(t){let[e,r]=v(t.ctimeSeconds,t.ctimeNanoseconds,t.ctimeMs,t.ctime),[i,a]=v(t.mtimeSeconds,t.mtimeNanoseconds,t.mtimeMs,t.mtime);return{ctimeSeconds:e%4294967296,ctimeNanoseconds:r%4294967296,mtimeSeconds:i%4294967296,mtimeNanoseconds:a%4294967296,dev:t.dev%4294967296,ino:t.ino%4294967296,mode:_(t.mode%4294967296),uid:t.uid%4294967296,gid:t.gid%4294967296,size:t.size>-1?t.size%4294967296:0}}let E=null;async function k(t){return null===E&&(E=await j()),E?S(t):new n().update(t).digest("hex")}async function S(t){return function(t){let e="";for(let r of new Uint8Array(t))r<16&&(e+="0"),e+=r.toString(16);return e}(await crypto.subtle.digest("SHA-1",t))}async function j(){try{let t=await S(new Uint8Array([]));if("da39a3ee5e6b4b0d3255bfef95601890afd80709"===t)return!0}catch(t){}return!1}class R{constructor(t,e){this._dirty=!1,this._unmergedPaths=e||new Set,this._entries=t||new Map}_addEntry(t){if(0===t.flags.stage)t.stages=[t],this._entries.set(t.path,t),this._unmergedPaths.delete(t.path);else{let e=this._entries.get(t.path);e||(this._entries.set(t.path,t),e=t),e.stages[t.flags.stage]=t,this._unmergedPaths.add(t.path)}}static async from(t){if(d.isBuffer(t))return R.fromBuffer(t);if(null===t)return new R(null);throw new p("invalid type passed to GitIndex.from")}static async fromBuffer(t){if(0===t.length)throw new p("Index file is empty (.git/index)");let e=new R,r=new y(t),i=r.toString("utf8",4);if("DIRC"!==i)throw new p(`Invalid dircache magic file number: ${i}`);let a=await k(t.slice(0,-20)),n=t.slice(-20).toString("hex");if(n!==a)throw new p(`Invalid checksum in GitIndex buffer: expected ${n} but saw ${a}`);let s=r.readUInt32BE();if(2!==s)throw new p(`Unsupported dircache version: ${s}`);let o=r.readUInt32BE(),c=0;for(;!r.eof()&&c<o;){let i={};i.ctimeSeconds=r.readUInt32BE(),i.ctimeNanoseconds=r.readUInt32BE(),i.mtimeSeconds=r.readUInt32BE(),i.mtimeNanoseconds=r.readUInt32BE(),i.dev=r.readUInt32BE(),i.ino=r.readUInt32BE(),i.mode=r.readUInt32BE(),i.uid=r.readUInt32BE(),i.gid=r.readUInt32BE(),i.size=r.readUInt32BE(),i.oid=r.slice(20).toString("hex");let a=r.readUInt16BE();i.flags={assumeValid:!!(32768&a),extended:!!(16384&a),stage:(12288&a)>>12,nameLength:4095&a};let n=t.indexOf(0,r.tell()+1)-r.tell();if(n<1)throw new p(`Got a path length of: ${n}`);if(i.path=r.toString("utf8",n),i.path.includes("..\\")||i.path.includes("../"))throw new g(i.path);let s=8-(r.tell()-12)%8;for(0===s&&(s=8);s--;){let t=r.readUInt8();if(0!==t)throw new p(`Expected 1-8 null characters but got '${t}' after ${i.path}`);if(r.eof())throw new p("Unexpected end of file")}i.stages=[],e._addEntry(i),c++}return e}get unmergedPaths(){return[...this._unmergedPaths]}get entries(){return[...this._entries.values()].sort($)}get entriesMap(){return this._entries}get entriesFlat(){return[...this.entries].flatMap(t=>t.stages.length>1?t.stages.filter(t=>t):t)}*[Symbol.iterator](){for(let t of this.entries)yield t}insert({filepath:t,stats:e,oid:r,stage:i=0}){e||(e={ctimeSeconds:0,ctimeNanoseconds:0,mtimeSeconds:0,mtimeNanoseconds:0,dev:0,ino:0,mode:0,uid:0,gid:0,size:0}),e=x(e);let a=d.from(t),n={ctimeSeconds:e.ctimeSeconds,ctimeNanoseconds:e.ctimeNanoseconds,mtimeSeconds:e.mtimeSeconds,mtimeNanoseconds:e.mtimeNanoseconds,dev:e.dev,ino:e.ino,mode:e.mode||33188,uid:e.uid,gid:e.gid,size:e.size,path:t,oid:r,flags:{assumeValid:!1,extended:!1,stage:i,nameLength:a.length<4095?a.length:4095},stages:[]};this._addEntry(n),this._dirty=!0}delete({filepath:t}){if(this._entries.has(t))this._entries.delete(t);else for(let e of this._entries.keys())e.startsWith(t+"/")&&this._entries.delete(e);this._unmergedPaths.has(t)&&this._unmergedPaths.delete(t),this._dirty=!0}clear(){this._entries.clear(),this._dirty=!0}has({filepath:t}){return this._entries.has(t)}render(){return this.entries.map(t=>`${t.mode.toString(8)} ${t.oid}    ${t.path}`).join("\n")}static async _entryToBuffer(t){let e=d.from(t.path),r=8*Math.ceil((62+e.length+1)/8),i=d.alloc(r),a=new y(i),n=x(t);return a.writeUInt32BE(n.ctimeSeconds),a.writeUInt32BE(n.ctimeNanoseconds),a.writeUInt32BE(n.mtimeSeconds),a.writeUInt32BE(n.mtimeNanoseconds),a.writeUInt32BE(n.dev),a.writeUInt32BE(n.ino),a.writeUInt32BE(n.mode),a.writeUInt32BE(n.uid),a.writeUInt32BE(n.gid),a.writeUInt32BE(n.size),a.write(t.oid,20,"hex"),a.writeUInt16BE(function(t){let e=t.flags;return e.extended=!1,e.nameLength=Math.min(d.from(t.path).length,4095),(e.assumeValid?32768:0)+(e.extended?16384:0)+((3&e.stage)<<12)+(4095&e.nameLength)}(t)),a.write(t.path,e.length,"utf8"),i}async toObject(){let t=d.alloc(12),e=new y(t);e.write("DIRC",4,"utf8"),e.writeUInt32BE(2),e.writeUInt32BE(this.entriesFlat.length);let r=[];for(let t of this.entries)if(r.push(R._entryToBuffer(t)),t.stages.length>1)for(let e of t.stages)e&&e!==t&&r.push(R._entryToBuffer(e));r=await Promise.all(r);let i=d.concat(r),a=d.concat([t,i]),n=await k(a);return d.concat([a,d.from(n,"hex")])}}function I(t,e,r=!0,i=!0){let a=x(t),n=x(e);return r&&a.mode!==n.mode||a.mtimeSeconds!==n.mtimeSeconds||a.ctimeSeconds!==n.ctimeSeconds||a.uid!==n.uid||a.gid!==n.gid||i&&a.ino!==n.ino||a.size!==n.size}let O=null,P=Symbol("IndexCache");async function A(t,e,r){let i=await t.lstat(e),a=await t.read(e),n=await R.from(a);r.map.set(e,n),r.stats.set(e,i)}async function U(t,e,r){let i=r.stats.get(e);if(void 0===i)return!0;let a=await t.lstat(e);return null!==i&&null!==a&&I(i,a)}class C{static async acquire({fs:t,gitdir:e,cache:r,allowUnmerged:i=!0},n){let s;r[P]||(r[P]={map:new Map,stats:new Map});let o=`${e}/index`;null===O&&(O=new a({maxPending:1/0}));let c=[];return await O.acquire(o,async()=>{await U(t,o,r[P])&&await A(t,o,r[P]);let e=r[P].map.get(o);if((c=e.unmergedPaths).length&&!i)throw new m(c);if(s=await n(e),e._dirty){let i=await e.toObject();await t.write(o,i),r[P].stats.set(o,await t.lstat(o)),e._dirty=!1}}),s}}function B(t){let e=Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"));return e>-1&&(t=t.slice(e+1)),t}function N(t){let e=Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"));return -1===e?".":0===e?"/":t.slice(0,e)}function D(t){let e=new Map,r=function(t){if(!e.has(t)){let i={type:"tree",fullpath:t,basename:B(t),metadata:{},children:[]};e.set(t,i),i.parent=r(N(t)),i.parent&&i.parent!==i&&i.parent.children.push(i)}return e.get(t)};for(let i of(r("."),t))!function(t,i){if(!e.has(t)){let a={type:"blob",fullpath:t,basename:B(t),metadata:i,parent:r(N(t)),children:[]};a.parent&&a.parent.children.push(a),e.set(t,a)}e.get(t)}(i.path,i);return e}class M{constructor({fs:t,gitdir:e,cache:r}){this.treePromise=C.acquire({fs:t,gitdir:e,cache:r},async function(t){return D(t.entries)});let i=this;this.ConstructEntry=class{constructor(t){this._fullpath=t,this._type=!1,this._mode=!1,this._stat=!1,this._oid=!1}async type(){return i.type(this)}async mode(){return i.mode(this)}async stat(){return i.stat(this)}async content(){return i.content(this)}async oid(){return i.oid(this)}}}async readdir(t){let e=t._fullpath,r=(await this.treePromise).get(e);if(!r||"blob"===r.type)return null;if("tree"!==r.type)throw Error(`ENOTDIR: not a directory, scandir '${e}'`);let i=r.children.map(t=>t.fullpath);return i.sort(b),i}async type(t){return!1===t._type&&await t.stat(),t._type}async mode(t){return!1===t._mode&&await t.stat(),t._mode}async stat(t){if(!1===t._stat){let e=(await this.treePromise).get(t._fullpath);if(!e)throw Error(`ENOENT: no such file or directory, lstat '${t._fullpath}'`);let r="tree"===e.type?{}:x(e.metadata);t._type="tree"===e.type?"tree":function(t){switch(t){case 16384:return"tree";case 33188:case 33261:case 40960:return"blob";case 57344:return"commit"}throw new p(`Unexpected GitTree entry mode: ${t.toString(8)}`)}(r.mode),t._mode=r.mode,"tree"===e.type?t._stat=void 0:t._stat=r}return t._stat}async content(t){}async oid(t){if(!1===t._oid){let e=(await this.treePromise).get(t._fullpath);t._oid=e.metadata.oid}return t._oid}}let T=Symbol("GitWalkSymbol");function H(){let t=Object.create(null);return Object.defineProperty(t,T,{value:function({fs:t,gitdir:e,cache:r}){return new M({fs:t,gitdir:e,cache:r})}}),Object.freeze(t),t}class z extends w{constructor(t){super(`Could not find ${t}.`),this.code=this.name=z.code,this.data={what:t}}}z.code="NotFoundError";class W extends w{constructor(t,e,r,i){super(`Object ${t} ${i?`at ${i}`:""}was anticipated to be a ${r} but it is a ${e}.`),this.code=this.name=W.code,this.data={oid:t,actual:e,expected:r,filepath:i}}}W.code="ObjectTypeError";class F extends w{constructor(t){super(`Expected a 40-char hex object id but saw "${t}".`),this.code=this.name=F.code,this.data={value:t}}}F.code="InvalidOidError";class G extends w{constructor(t){super(`Could not find a fetch refspec for remote "${t}". Make sure the config file has an entry like the following:
// [remote "${t}"]
// 	fetch = +refs/heads/*:refs/remotes/origin/*
// `),this.code=this.name=G.code,this.data={remote:t}}}G.code="NoRefspecError";class q{constructor(t){if(this.refs=new Map,this.parsedConfig=[],t){let e=null;this.parsedConfig=t.trim().split("\n").map(t=>{if(/^\s*#/.test(t))return{line:t,comment:!0};let r=t.indexOf(" ");if(t.startsWith("^")){let r=t.slice(1);return this.refs.set(e+"^{}",r),{line:t,ref:e,peeled:r}}{let i=t.slice(0,r);return e=t.slice(r+1),this.refs.set(e,i),{line:t,ref:e,oid:i}}})}return this}static from(t){return new q(t)}delete(t){this.parsedConfig=this.parsedConfig.filter(e=>e.ref!==t),this.refs.delete(t)}toString(){return this.parsedConfig.map(({line:t})=>t).join("\n")+"\n"}}class L{constructor({remotePath:t,localPath:e,force:r,matchPrefix:i}){Object.assign(this,{remotePath:t,localPath:e,force:r,matchPrefix:i})}static from(t){let[e,r,i,a,n]=t.match(/^(\+?)(.*?)(\*?):(.*?)(\*?)$/).slice(1),s="*"===i;if(s!==("*"===n))throw new p("Invalid refspec");return new L({remotePath:r,localPath:a,force:"+"===e,matchPrefix:s})}translate(t){if(this.matchPrefix){if(t.startsWith(this.remotePath))return this.localPath+t.replace(this.remotePath,"")}else if(t===this.remotePath)return this.localPath;return null}reverseTranslate(t){if(this.matchPrefix){if(t.startsWith(this.localPath))return this.remotePath+t.replace(this.localPath,"")}else if(t===this.localPath)return this.remotePath;return null}}class V{constructor(t=[]){this.rules=t}static from(t){let e=[];for(let r of t)e.push(L.from(r));return new V(e)}add(t){let e=L.from(t);this.rules.push(e)}translate(t){let e=[];for(let r of this.rules)for(let i of t){let t=r.translate(i);t&&e.push([i,t])}return e}translateOne(t){let e=null;for(let r of this.rules){let i=r.translate(t);i&&(e=i)}return e}localNamespaces(){return this.rules.filter(t=>t.matchPrefix).map(t=>t.localPath.replace(/\/$/,""))}}function K(t,e){let r=t.replace(/\^\{\}$/,""),i=e.replace(/\^\{\}$/,""),a=-(r<i)||+(r>i);return 0===a?t.endsWith("^{}")?1:-1:a}let Z=new Map;function Y(t){var e;let r=Z.get(t);return r||(r="/."===(e=(e=t).split("/./").join("/").replace(/\/{2,}/g,"/"))?"/":"./"===e?".":(e.startsWith("./")&&(e=e.slice(2)),e.endsWith("/.")&&(e=e.slice(0,-2)),e.length>1&&e.endsWith("/")&&(e=e.slice(0,-1)),""===e)?".":e,Z.set(t,r)),r}function J(...t){return Y(t.map(Y).join("/"))}let X=t=>{if("true"===(t=t.trim().toLowerCase())||"yes"===t||"on"===t)return!0;if("false"===t||"no"===t||"off"===t)return!1;throw Error(`Expected 'true', 'false', 'yes', 'no', 'on', or 'off', but got ${t}`)},Q={core:{filemode:X,bare:X,logallrefupdates:X,symlinks:X,ignorecase:X,bigFileThreshold:t=>{let e=parseInt(t=t.toLowerCase());return t.endsWith("k")&&(e*=1024),t.endsWith("m")&&(e*=1048576),t.endsWith("g")&&(e*=1073741824),e}}},tt=/^\[([A-Za-z0-9-.]+)(?: "(.*)")?\]$/,te=/^[A-Za-z0-9-.]+$/,tr=/^([A-Za-z][A-Za-z-]*)(?: *= *(.*))?$/,ti=/^[A-Za-z][A-Za-z-]*$/,ta=/^(.*?)( *[#;].*)$/,tn=t=>{let e=tt.exec(t);if(null!=e){let[t,r]=e.slice(1);return[t,r]}return null},ts=t=>{let e=tr.exec(t);if(null!=e){let[t,r="true"]=e.slice(1);return[t,tl(to(r))]}return null},to=t=>{let e=ta.exec(t);if(null==e)return t;let[r,i]=e.slice(1);return tc(r)&&tc(i)?`${r}${i}`:r},tc=t=>(t.match(/(?:^|[^\\])"/g)||[]).length%2!=0,tl=t=>t.split("").reduce((t,e,r,i)=>{let a='"'===e&&"\\"!==i[r-1],n="\\"===e&&'"'===i[r+1];return a||n?t:t+e},""),tf=t=>null!=t?t.toLowerCase():null,tu=(t,e,r)=>[tf(t),e,tf(r)].filter(t=>null!=t).join("."),td=t=>{let e=t.split("."),r=e.shift(),i=e.pop(),a=e.length?e.join("."):void 0;return{section:r,subsection:a,name:i,path:tu(r,a,i),sectionPath:tu(r,a,null)}},th=(t,e)=>t.reduce((t,r,i)=>e(r)?i:t,-1);class tw{constructor(t){let e=null,r=null;this.parsedConfig=t?t.split("\n").map(t=>{let i=null,a=null,n=t.trim(),s=tn(n),o=null!=s;if(o)[e,r]=s;else{let t=ts(n);null!=t&&([i,a]=t)}let c=tu(e,r,i);return{line:t,isSection:o,section:e,subsection:r,name:i,value:a,path:c}}):[]}static from(t){return new tw(t)}async get(t,e=!1){let r=td(t).path,i=this.parsedConfig.filter(t=>t.path===r).map(({section:t,name:e,value:r})=>{let i=Q[t]&&Q[t][e];return i?i(r):r});return e?i:i.pop()}async getall(t){return this.get(t,!0)}async getSubsections(t){return this.parsedConfig.filter(e=>e.section===t&&e.isSection).map(t=>t.subsection)}async deleteSection(t,e){this.parsedConfig=this.parsedConfig.filter(r=>!(r.section===t&&r.subsection===e))}async append(t,e){return this.set(t,e,!0)}async set(t,e,r=!1){let{section:i,subsection:a,name:n,path:s,sectionPath:o}=td(t),c=th(this.parsedConfig,t=>t.path===s);if(null==e)-1!==c&&this.parsedConfig.splice(c,1);else if(-1!==c){let t=Object.assign({},this.parsedConfig[c],{name:n,value:e,modified:!0});r?this.parsedConfig.splice(c+1,0,t):this.parsedConfig[c]=t}else{let t=this.parsedConfig.findIndex(t=>t.path===o),r={section:i,subsection:a,name:n,value:e,modified:!0,path:s};te.test(i)&&ti.test(n)&&(t>=0?this.parsedConfig.splice(t+1,0,r):this.parsedConfig.push({section:i,subsection:a,modified:!0,path:o},r))}}toString(){return this.parsedConfig.map(({line:t,section:e,subsection:r,name:i,value:a,modified:n=!1})=>n?null!=i&&null!=a?"string"==typeof a&&/[#;]/.test(a)?`	${i} = "${a}"`:`	${i} = ${a}`:null!=r?`[${e} "${r}"]`:`[${e}]`:t).join("\n")}}class tm{static async get({fs:t,gitdir:e}){let r=await t.read(`${e}/config`,{encoding:"utf8"});return tw.from(r)}static async save({fs:t,gitdir:e,config:r}){await t.write(`${e}/config`,r.toString(),{encoding:"utf8"})}}let tp=t=>[`${t}`,`refs/${t}`,`refs/tags/${t}`,`refs/heads/${t}`,`refs/remotes/${t}`,`refs/remotes/${t}/HEAD`],tg=["config","description","index","shallow","commondir"];async function ty(t,e){return void 0===i&&(i=new a),i.acquire(t,e)}class tb{static async updateRemoteRefs({fs:t,gitdir:e,remote:r,refs:i,symrefs:a,tags:n,refspecs:s,prune:o=!1,pruneTags:c=!1}){for(let t of i.values())if(!t.match(/[0-9a-f]{40}/))throw new F(t);let l=await tm.get({fs:t,gitdir:e});if(!s){if(0===(s=await l.getall(`remote.${r}.fetch`)).length)throw new G(r);s.unshift(`+HEAD:refs/remotes/${r}/HEAD`)}let f=V.from(s),u=new Map;if(c){let r=await tb.listRefs({fs:t,gitdir:e,filepath:"refs/tags"});await tb.deleteRefs({fs:t,gitdir:e,refs:r.map(t=>`refs/tags/${t}`)})}if(n){for(let r of i.keys())if(r.startsWith("refs/tags")&&!r.endsWith("^{}")&&!await tb.exists({fs:t,gitdir:e,ref:r})){let t=i.get(r);u.set(r,t)}}for(let[t,e]of f.translate([...i.keys()])){let r=i.get(t);u.set(e,r)}for(let[t,e]of f.translate([...a.keys()])){let r=a.get(t),i=f.translateOne(r);i&&u.set(e,`ref: ${i}`)}let d=[];if(o){for(let r of f.localNamespaces())for(let i of(await tb.listRefs({fs:t,gitdir:e,filepath:r})).map(t=>`${r}/${t}`))u.has(i)||d.push(i);d.length>0&&await tb.deleteRefs({fs:t,gitdir:e,refs:d})}for(let[r,i]of u)await ty(r,async()=>t.write(J(e,r),`${i.trim()}
// `,"utf8"));return{pruned:d}}static async writeRef({fs:t,gitdir:e,ref:r,value:i}){if(!i.match(/[0-9a-f]{40}/))throw new F(i);await ty(r,async()=>t.write(J(e,r),`${i.trim()}
// `,"utf8"))}static async writeSymbolicRef({fs:t,gitdir:e,ref:r,value:i}){await ty(r,async()=>t.write(J(e,r),`ref: ${i.trim()}
// `,"utf8"))}static async deleteRef({fs:t,gitdir:e,ref:r}){return tb.deleteRefs({fs:t,gitdir:e,refs:[r]})}static async deleteRefs({fs:t,gitdir:e,refs:r}){await Promise.all(r.map(r=>t.rm(J(e,r))));let i=await ty("packed-refs",async()=>t.read(`${e}/packed-refs`,{encoding:"utf8"})),a=q.from(i),n=a.refs.size;for(let t of r)a.refs.has(t)&&a.delete(t);a.refs.size<n&&(i=a.toString(),await ty("packed-refs",async()=>t.write(`${e}/packed-refs`,i,{encoding:"utf8"})))}static async resolve({fs:t,gitdir:e,ref:r,depth:i}){if(void 0!==i&&-1==--i)return r;if(r.startsWith("ref: "))return r=r.slice(5),tb.resolve({fs:t,gitdir:e,ref:r,depth:i});if(40===r.length&&/[0-9a-f]{40}/.test(r))return r;let a=await tb.packedRefs({fs:t,gitdir:e});for(let n of tp(r).filter(t=>!tg.includes(t))){let r=await ty(n,async()=>await t.read(`${e}/${n}`,{encoding:"utf8"})||a.get(n));if(r)return tb.resolve({fs:t,gitdir:e,ref:r.trim(),depth:i})}throw new z(r)}static async exists({fs:t,gitdir:e,ref:r}){try{return await tb.expand({fs:t,gitdir:e,ref:r}),!0}catch(t){return!1}}static async expand({fs:t,gitdir:e,ref:r}){if(40===r.length&&/[0-9a-f]{40}/.test(r))return r;let i=await tb.packedRefs({fs:t,gitdir:e});for(let a of tp(r))if(await ty(a,async()=>t.exists(`${e}/${a}`))||i.has(a))return a;throw new z(r)}static async expandAgainstMap({ref:t,map:e}){for(let r of tp(t))if(await e.has(r))return r;throw new z(t)}static resolveAgainstMap({ref:t,fullref:e=t,depth:r,map:i}){if(void 0!==r&&-1==--r)return{fullref:e,oid:t};if(t.startsWith("ref: "))return t=t.slice(5),tb.resolveAgainstMap({ref:t,fullref:e,depth:r,map:i});if(40===t.length&&/[0-9a-f]{40}/.test(t))return{fullref:e,oid:t};for(let e of tp(t)){let t=i.get(e);if(t)return tb.resolveAgainstMap({ref:t.trim(),fullref:e,depth:r,map:i})}throw new z(t)}static async packedRefs({fs:t,gitdir:e}){let r=await ty("packed-refs",async()=>t.read(`${e}/packed-refs`,{encoding:"utf8"}));return q.from(r).refs}static async listRefs({fs:t,gitdir:e,filepath:r}){let i=tb.packedRefs({fs:t,gitdir:e}),a=null;try{a=(a=await t.readdirDeep(`${e}/${r}`)).map(t=>t.replace(`${e}/${r}/`,""))}catch(t){a=[]}for(let t of(await i).keys())t.startsWith(r)&&(t=t.replace(r+"/",""),a.includes(t)||a.push(t));return a.sort(K),a}static async listBranches({fs:t,gitdir:e,remote:r}){return r?tb.listRefs({fs:t,gitdir:e,filepath:`refs/remotes/${r}`}):tb.listRefs({fs:t,gitdir:e,filepath:"refs/heads"})}static async listTags({fs:t,gitdir:e}){return(await tb.listRefs({fs:t,gitdir:e,filepath:"refs/tags"})).filter(t=>!t.endsWith("^{}"))}}function t$(t,e){return b(t_(t),t_(e))}function t_(t){return"040000"===t.mode?t.path+"/":t.path}function tv(t){switch(t){case"040000":return"tree";case"100644":case"100755":case"120000":return"blob";case"160000":return"commit"}throw new p(`Unexpected GitTree entry mode: ${t}`)}function tx(t){return!t.oid&&t.sha&&(t.oid=t.sha),t.mode=function(t){if("number"==typeof t&&(t=t.toString(8)),t.match(/^0?4.*/))return"040000";if(t.match(/^1006.*/))return"100644";if(t.match(/^1007.*/))return"100755";if(t.match(/^120.*/))return"120000";if(t.match(/^160.*/))return"160000";throw new p(`Could not understand file mode: ${t}`)}(t.mode),t.type||(t.type=tv(t.mode)),t}class tE{constructor(t){if(d.isBuffer(t))this._entries=function(t){let e=[],r=0;for(;r<t.length;){let i=t.indexOf(32,r);if(-1===i)throw new p(`GitTree: Error parsing buffer at byte location ${r}: Could not find the next space character.`);let a=t.indexOf(0,r);if(-1===a)throw new p(`GitTree: Error parsing buffer at byte location ${r}: Could not find the next null character.`);let n=t.slice(r,i).toString("utf8");"40000"===n&&(n="040000");let s=tv(n),o=t.slice(i+1,a).toString("utf8");if(o.includes("\\")||o.includes("/"))throw new g(o);let c=t.slice(a+1,a+21).toString("hex");r=a+21,e.push({mode:n,path:o,oid:c,type:s})}return e}(t);else if(Array.isArray(t))this._entries=t.map(tx);else throw new p("invalid type passed to GitTree constructor");this._entries.sort($)}static from(t){return new tE(t)}render(){return this._entries.map(t=>`${t.mode} ${t.type} ${t.oid}    ${t.path}`).join("\n")}toObject(){let t=[...this._entries];return t.sort(t$),d.concat(t.map(t=>{let e=d.from(t.mode.replace(/^0/,"")),r=d.from(" "),i=d.from(t.path,"utf8"),a=d.from([0]),n=d.from(t.oid,"hex");return d.concat([e,r,i,a,n])}))}entries(){return this._entries}*[Symbol.iterator](){for(let t of this._entries)yield t}}class tk{static wrap({type:t,object:e}){return d.concat([d.from(`${t} ${e.byteLength.toString()}\0`),d.from(e)])}static unwrap(t){let e=t.indexOf(32),r=t.indexOf(0),i=t.slice(0,e).toString("utf8"),a=t.slice(e+1,r).toString("utf8"),n=t.length-(r+1);if(parseInt(a)!==n)throw new p(`Length mismatch: expected ${a} bytes but got ${n} instead.`);return{type:i,object:d.from(t.slice(r+1))}}}async function tS({fs:t,gitdir:e,oid:r}){let i=`objects/${r.slice(0,2)}/${r.slice(2)}`,a=await t.read(`${e}/${i}`);return a?{object:a,format:"deflated",source:i}:null}function tj(t){let e=0,r=0,i=null;do e|=(127&(i=t.readUInt8()))<<r,r+=7;while(128&i);return e}function tR(t,e,r){let i=0,a=0;for(;r--;)1&e&&(i|=t.readUInt8()<<a),e>>=1,a+=8;return i}function tI(t,e){let r=t.readUInt8();if(!(128&r))return t.slice(r);{let i=tR(t,15&r,4),a=tR(t,(112&r)>>4,3);return 0===a&&(a=65536),e.slice(i,i+a)}}function tO(t){let e;return t[Symbol.asyncIterator]?t[Symbol.asyncIterator]():t[Symbol.iterator]?t[Symbol.iterator]():t.next?t:(e=[t],{next:()=>Promise.resolve({done:0===e.length,value:e.pop()}),return:()=>(e=[],{}),[Symbol.asyncIterator](){return this}})}class tP{constructor(t){if(void 0===d)throw Error("Missing Buffer dependency");this.stream=tO(t),this.buffer=null,this.cursor=0,this.undoCursor=0,this.started=!1,this._ended=!1,this._discardedBytes=0}eof(){return this._ended&&this.cursor===this.buffer.length}tell(){return this._discardedBytes+this.cursor}async byte(){if(!this.eof()&&(this.started||await this._init(),this.cursor!==this.buffer.length||(await this._loadnext(),!this._ended)))return this._moveCursor(1),this.buffer[this.undoCursor]}async chunk(){if(!this.eof()&&(this.started||await this._init(),this.cursor!==this.buffer.length||(await this._loadnext(),!this._ended)))return this._moveCursor(this.buffer.length),this.buffer.slice(this.undoCursor,this.cursor)}async read(t){if(!this.eof())return this.started||await this._init(),this.cursor+t>this.buffer.length&&(this._trim(),await this._accumulate(t)),this._moveCursor(t),this.buffer.slice(this.undoCursor,this.cursor)}async skip(t){this.eof()||(this.started||await this._init(),this.cursor+t>this.buffer.length&&(this._trim(),await this._accumulate(t)),this._moveCursor(t))}async undo(){this.cursor=this.undoCursor}async _next(){this.started=!0;let{done:t,value:e}=await this.stream.next();return t&&(this._ended=!0,!e)?d.alloc(0):(e&&(e=d.from(e)),e)}_trim(){this.buffer=this.buffer.slice(this.undoCursor),this.cursor-=this.undoCursor,this._discardedBytes+=this.undoCursor,this.undoCursor=0}_moveCursor(t){this.undoCursor=this.cursor,this.cursor+=t,this.cursor>this.buffer.length&&(this.cursor=this.buffer.length)}async _accumulate(t){if(this._ended)return;let e=[this.buffer];for(;this.cursor+t>e.reduce((t,e)=>t+e.length,0);){let t=await this._next();if(this._ended)break;e.push(t)}this.buffer=d.concat(e)}async _loadnext(){this._discardedBytes+=this.buffer.length,this.undoCursor=0,this.cursor=0,this.buffer=await this._next()}async _init(){this.buffer=await this._next()}}async function tA(t,e){let r=new tP(t),i=await r.read(4);if("PACK"!==(i=i.toString("utf8")))throw new p(`Invalid PACK header '${i}'`);let a=await r.read(4);if(2!==(a=a.readUInt32BE(0)))throw new p(`Invalid packfile version: ${a}`);let n=await r.read(4);if(!((n=n.readUInt32BE(0))<1))for(;!r.eof()&&n--;){let t=r.tell(),{type:i,length:a,ofs:s,reference:c}=await tU(r),l=new o.Inflate;for(;!l.result;){let o=await r.chunk();if(!o)break;if(l.push(o,!1),l.err)throw new p(`Pako error: ${l.msg}`);if(l.result){if(l.result.length!==a)throw new p("Inflated object size is different from that stated in packfile.");await r.undo(),await r.read(o.length-l.strm.avail_in);let f=r.tell();await e({data:l.result,type:i,num:n,offset:t,end:f,reference:c,ofs:s})}}}}async function tU(t){let e,r,i=await t.byte(),a=i>>4&7,n=15&i;if(128&i){let e=4;do n|=(127&(i=await t.byte()))<<e,e+=7;while(128&i)}if(6===a){let a=0;e=0;let n=[];do e|=(127&(i=await t.byte()))<<a,a+=7,n.push(i);while(128&i);r=d.from(n)}return 7===a&&(r=await t.read(20)),{type:a,length:n,ofs:e,reference:r}}let tC=!1;async function tB(t){return null===tC&&(tC=function(){try{return new DecompressionStream("deflate"),!0}catch(t){}return!1}()),tC?tN(t):o.inflate(t)}async function tN(t){let e=new DecompressionStream("deflate"),r=new Blob([t]).stream().pipeThrough(e);return new Uint8Array(await new Response(r).arrayBuffer())}class tD{constructor(t){Object.assign(this,t),this.offsetCache={}}static async fromIdx({idx:t,getExternalRefDelta:e}){let r=new y(t);if("ff744f63"!==r.slice(4).toString("hex"))return;let i=r.readUInt32BE();if(2!==i)throw new p(`Unable to read version ${i} packfile IDX. (Only version 2 supported)`);if(t.byteLength>2147483648)throw new p("To keep implementation simple, I haven't implemented the layer 5 feature needed to support packfiles > 2GB in size.");r.seek(r.tell()+1020);let a=r.readUInt32BE(),n=[];for(let t=0;t<a;t++){let e=r.slice(20).toString("hex");n[t]=e}r.seek(r.tell()+4*a);let s=new Map;for(let t=0;t<a;t++)s.set(n[t],r.readUInt32BE());return new tD({hashes:n,crcs:{},offsets:s,packfileSha:r.slice(20).toString("hex"),getExternalRefDelta:e})}static async fromPack({pack:t,getExternalRefDelta:e,onProgress:r}){let i={1:"commit",2:"tree",3:"blob",4:"tag",6:"ofs-delta",7:"ref-delta"},a={},n=t.slice(-20).toString("hex"),o=[],c={},l=new Map,f=null,u=null;await tA([t],async({data:t,type:e,reference:n,offset:s,num:o})=>{null===f&&(f=o);let c=Math.floor((f-o)*100/f);c!==u&&r&&await r({phase:"Receiving objects",loaded:f-o,total:f}),u=c,["commit","tree","blob","tag"].includes(e=i[e])?a[s]={type:e,offset:s}:"ofs-delta"===e?a[s]={type:e,offset:s}:"ref-delta"===e&&(a[s]={type:e,offset:s})});let d=Object.keys(a).map(Number);for(let[e,r]of d.entries()){let i=e+1===d.length?t.byteLength-20:d[e+1],n=a[r],o=s.buf(t.slice(r,i))>>>0;n.end=i,n.crc=o}let h=new tD({pack:Promise.resolve(t),packfileSha:n,crcs:c,hashes:o,offsets:l,getExternalRefDelta:e});u=null;let w=0,m=[0,0,0,0,0,0,0,0,0,0,0,0];for(let t in a){t=Number(t);let e=Math.floor(100*w/f);e!==u&&r&&await r({phase:"Resolving deltas",loaded:w,total:f}),w++,u=e;let i=a[t];if(!i.oid)try{h.readDepth=0,h.externalReadDepth=0;let{type:e,object:r}=await h.readSlice({start:t});m[h.readDepth]+=1;let a=await k(tk.wrap({type:e,object:r}));i.oid=a,o.push(a),l.set(a,t),c[a]=i.crc}catch(t){continue}}return o.sort(),h}async toBuffer(){let t=[],e=(e,r)=>{t.push(d.from(e,r))};e("ff744f63","hex"),e("00000002","hex");let r=new y(d.alloc(1024));for(let t=0;t<256;t++){let e=0;for(let r of this.hashes)parseInt(r.slice(0,2),16)<=t&&e++;r.writeUInt32BE(e)}for(let i of(t.push(r.buffer),this.hashes))e(i,"hex");let i=new y(d.alloc(4*this.hashes.length));for(let t of this.hashes)i.writeUInt32BE(this.crcs[t]);t.push(i.buffer);let a=new y(d.alloc(4*this.hashes.length));for(let t of this.hashes)a.writeUInt32BE(this.offsets.get(t));t.push(a.buffer),e(this.packfileSha,"hex");let n=d.concat(t),s=await k(n),o=d.alloc(20);return o.write(s,"hex"),d.concat([n,o])}async load({pack:t}){this.pack=t}async unload(){this.pack=null}async read({oid:t}){if(!this.offsets.get(t)){if(this.getExternalRefDelta)return this.externalReadDepth++,this.getExternalRefDelta(t);throw new p(`Could not read object ${t} from packfile`)}let e=this.offsets.get(t);return this.readSlice({start:e})}async readSlice({start:t}){if(this.offsetCache[t])return Object.assign({},this.offsetCache[t]);if(this.readDepth++,!this.pack)throw new p("Tried to read from a GitPackIndex with no packfile loaded into memory");let e=(await this.pack).slice(t),r=new y(e),i=r.readUInt8(),a=112&i,n={16:"commit",32:"tree",48:"blob",64:"tag",96:"ofs_delta",112:"ref_delta"}[a];if(void 0===n)throw new p("Unrecognized type: 0b"+a.toString(2));let s=15&i,o=s;128&i&&(o=function(t,e){let r=e,i=4,a=null;do r|=(127&(a=t.readUInt8()))<<i,i+=7;while(128&a);return r}(r,s));let c=null,l=null;if("ofs_delta"===n){let e=t-function(t){let e=[],r=0,i=0;do{let a=127&(r=t.readUInt8());e.push(a),i=128&r}while(i);return e.reduce((t,e)=>t+1<<7|e,-1)}(r);({object:c,type:n}=await this.readSlice({start:e}))}if("ref_delta"===n){let t=r.slice(20).toString("hex");({object:c,type:n}=await this.read({oid:t}))}let f=e.slice(r.tell());if((l=d.from(await tB(f))).byteLength!==o)throw new p(`Packfile told us object would have length ${o} but it had length ${l.byteLength}`);return c&&(l=d.from(function(t,e){let r;let i=new y(t),a=tj(i);if(a!==e.byteLength)throw new p(`applyDelta expected source buffer to be ${a} bytes but the provided buffer was ${e.length} bytes`);let n=tj(i),s=tI(i,e);if(s.byteLength===n)r=s;else{let t=new y(r=d.alloc(n));for(t.copy(s);!i.eof();)t.copy(tI(i,e));let a=t.tell();if(n!==a)throw new p(`applyDelta expected target buffer to be ${n} bytes but the resulting buffer was ${a} bytes`)}return r}(l,c))),this.readDepth>3&&(this.offsetCache[t]={type:n,object:l}),{type:n,format:"content",object:l}}}let tM=Symbol("PackfileCache");async function tT({fs:t,filename:e,getExternalRefDelta:r,emitter:i,emitterPrefix:a}){let n=await t.read(e);return tD.fromIdx({idx:n,getExternalRefDelta:r})}function tH({fs:t,cache:e,filename:r,getExternalRefDelta:i,emitter:a,emitterPrefix:n}){e[tM]||(e[tM]=new Map);let s=e[tM].get(r);return s||(s=tT({fs:t,filename:r,getExternalRefDelta:i,emitter:a,emitterPrefix:n}),e[tM].set(r,s)),s}async function tz({fs:t,cache:e,gitdir:r,oid:i,format:a="content",getExternalRefDelta:n}){let s=await t.readdir(J(r,"objects/pack"));for(let a of s=s.filter(t=>t.endsWith(".idx"))){let s=`${r}/objects/pack/${a}`,o=await tH({fs:t,cache:e,filename:s,getExternalRefDelta:n});if(o.error)throw new p(o.error);if(o.offsets.has(i)){if(!o.pack){let e=s.replace(/idx$/,"pack");o.pack=t.read(e)}let e=await o.read({oid:i,getExternalRefDelta:n});return e.format="content",e.source=`objects/pack/${a.replace(/idx$/,"pack")}`,e}}return null}async function tW({fs:t,cache:e,gitdir:r,oid:i,format:a="content"}){let n;if("4b825dc642cb6eb9a060e54bf8d69288fbee4904"===i&&(n={format:"wrapped",object:d.from(`tree 0\0`)}),n||(n=await tS({fs:t,gitdir:r,oid:i})),n||(n=await tz({fs:t,cache:e,gitdir:r,oid:i,getExternalRefDelta:i=>tW({fs:t,cache:e,gitdir:r,oid:i})})),!n)throw new z(i);if("deflated"===a)return n;if("deflated"===n.format&&(n.object=d.from(await tB(n.object)),n.format="wrapped"),"wrapped"===n.format){if("wrapped"===a&&"wrapped"===n.format)return n;let t=await k(n.object);if(t!==i)throw new p(`SHA check failed! Expected ${i}, computed ${t}`);let{object:e,type:r}=tk.unwrap(n.object);n.type=r,n.object=e,n.format="content"}if("content"===n.format)return"content"===a?n:void 0;throw new p(`invalid format "${n.format}"`)}class tF extends w{constructor(t,e,r=!0){super(`Failed to create ${t} at ${e} because it already exists.${r?` (Hint: use 'force: true' parameter to overwrite existing ${t}.)`:""}`),this.code=this.name=tF.code,this.data={noun:t,where:e,canForce:r}}}tF.code="AlreadyExistsError";class tG extends w{constructor(t,e,r){super(`Found multiple ${t} matching "${e}" (${r.join(", ")}). Use a longer abbreviation length to disambiguate them.`),this.code=this.name=tG.code,this.data={nouns:t,short:e,matches:r}}}tG.code="AmbiguousError";class tq extends w{constructor(t){super(`Your local changes to the following files would be overwritten by checkout: ${t.join(", ")}`),this.code=this.name=tq.code,this.data={filepaths:t}}}tq.code="CheckoutConflictError";class tL extends w{constructor(t,e){super(`Failed to checkout "${t}" because commit ${e} is not available locally. Do a git fetch to make the branch available locally.`),this.code=this.name=tL.code,this.data={ref:t,oid:e}}}tL.code="CommitNotFetchedError";class tV extends w{constructor(){super("Empty response from git server."),this.code=this.name=tV.code,this.data={}}}tV.code="EmptyServerResponseError";class tK extends w{constructor(){super("A simple fast-forward merge was not possible."),this.code=this.name=tK.code,this.data={}}}tK.code="FastForwardError";class tZ extends w{constructor(t,e){super(`One or more branches were not updated: ${t}`),this.code=this.name=tZ.code,this.data={prettyDetails:t,result:e}}}tZ.code="GitPushError";class tY extends w{constructor(t,e,r){super(`HTTP Error: ${t} ${e}`),this.code=this.name=tY.code,this.data={statusCode:t,statusMessage:e,response:r}}}tY.code="HttpError";class tJ extends w{constructor(t){let e="invalid filepath";"leading-slash"===t||"trailing-slash"===t?e='"filepath" parameter should not include leading or trailing directory separators because these can cause problems on some platforms.':"directory"===t&&(e='"filepath" should not be a directory.'),super(e),this.code=this.name=tJ.code,this.data={reason:t}}}tJ.code="InvalidFilepathError";class tX extends w{constructor(t,e){super(`"${t}" would be an invalid git reference. (Hint: a valid alternative would be "${e}".)`),this.code=this.name=tX.code,this.data={ref:t,suggestion:e}}}tX.code="InvalidRefNameError";class tQ extends w{constructor(t){super(`Maximum search depth of ${t} exceeded.`),this.code=this.name=tQ.code,this.data={depth:t}}}tQ.code="MaxDepthError";class t0 extends w{constructor(){super("Merges with conflicts are not supported yet."),this.code=this.name=t0.code,this.data={}}}t0.code="MergeNotSupportedError";class t1 extends w{constructor(t,e,r,i){super(`Automatic merge failed with one or more merge conflicts in the following files: ${t.toString()}. Fix conflicts then commit the result.`),this.code=this.name=t1.code,this.data={filepaths:t,bothModified:e,deleteByUs:r,deleteByTheirs:i}}}t1.code="MergeConflictError";class t2 extends w{constructor(t){super(`No name was provided for ${t} in the argument or in the .git/config file.`),this.code=this.name=t2.code,this.data={role:t}}}t2.code="MissingNameError";class t8 extends w{constructor(t){super(`The function requires a "${t}" parameter but none was provided.`),this.code=this.name=t8.code,this.data={parameter:t}}}t8.code="MissingParameterError";class t4 extends w{constructor(t){super('There are multiple errors that were thrown by the method. Please refer to the "errors" property to see more'),this.code=this.name=t4.code,this.data={errors:t},this.errors=t}}t4.code="MultipleGitError";class t6 extends w{constructor(t,e){super(`Expected "${t}" but received "${e}".`),this.code=this.name=t6.code,this.data={expected:t,actual:e}}}t6.code="ParseError";class t3 extends w{constructor(t){let e="";"not-fast-forward"===t?e=" because it was not a simple fast-forward":"tag-exists"===t&&(e=" because tag already exists"),super(`Push rejected${e}. Use "force: true" to override.`),this.code=this.name=t3.code,this.data={reason:t}}}t3.code="PushRejectedError";class t9 extends w{constructor(t,e){super(`Remote does not support the "${t}" so the "${e}" parameter cannot be used.`),this.code=this.name=t9.code,this.data={capability:t,parameter:e}}}t9.code="RemoteCapabilityError";class t5 extends w{constructor(t,e){super(`Remote did not reply using the "smart" HTTP protocol. Expected "001e# service=git-upload-pack" but received: ${t}`),this.code=this.name=t5.code,this.data={preview:t,response:e}}}t5.code="SmartHttpError";class t7 extends w{constructor(t,e,r){super(`Git remote "${t}" uses an unrecognized transport protocol: "${e}"`),this.code=this.name=t7.code,this.data={url:t,transport:e,suggestion:r}}}t7.code="UnknownTransportError";class et extends w{constructor(t){super(`Cannot parse remote URL: "${t}"`),this.code=this.name=et.code,this.data={url:t}}}et.code="UrlParseError";class ee extends w{constructor(){super("The operation was canceled."),this.code=this.name=ee.code,this.data={}}}ee.code="UserCanceledError";class er extends w{constructor(t){super(`Could not merge index: Entry for '${t}' is not up to date. Either reset the index entry to HEAD, or stage your unstaged changes.`),this.code=this.name=er.code,this.data={filepath:t}}}er.code="IndexResetError";var ei=Object.freeze({__proto__:null,AlreadyExistsError:tF,AmbiguousError:tG,CheckoutConflictError:tq,CommitNotFetchedError:tL,EmptyServerResponseError:tV,FastForwardError:tK,GitPushError:tZ,HttpError:tY,InternalError:p,InvalidFilepathError:tJ,InvalidOidError:F,InvalidRefNameError:tX,MaxDepthError:tQ,MergeNotSupportedError:t0,MergeConflictError:t1,MissingNameError:t2,MissingParameterError:t8,MultipleGitError:t4,NoRefspecError:G,NotFoundError:z,ObjectTypeError:W,ParseError:t6,PushRejectedError:t3,RemoteCapabilityError:t9,SmartHttpError:t5,UnknownTransportError:t7,UnsafeFilepathError:g,UrlParseError:et,UserCanceledError:ee,UnmergedPathsError:m,IndexResetError:er});function ea({name:t,email:e,timestamp:r,timezoneOffset:i}){return i=function(t){var e,r;let i=Math.sign(r=0===(e=t)?e:-e)||(Object.is(r,-0)?-1:1),a=Math.floor((t=Math.abs(t))/60);t-=60*a;let n=String(a),s=String(t);return n.length<2&&(n="0"+n),s.length<2&&(s="0"+s),(-1===i?"-":"+")+n+s}(i),`${t} <${e}> ${r} ${i}`}function en(t){return t=(t=(t=t.replace(/\r/g,"")).replace(/^\n+/,"")).replace(/\n+$/,"")+"\n"}function es(t){let[,e,r,i,a]=t.match(/^(.*) <(.*)> (.*) (.*)$/);return{name:e,email:r,timestamp:Number(i),timezoneOffset:function(t){var e;let[,r,i,a]=t.match(/(\+|-)(\d\d)(\d\d)/);return 0==(e=a=("+"===r?1:-1)*(60*Number(i)+Number(a)))?e:-e}(a)}}class eo{constructor(t){if("string"==typeof t)this._tag=t;else if(d.isBuffer(t))this._tag=t.toString("utf8");else if("object"==typeof t)this._tag=eo.render(t);else throw new p("invalid type passed to GitAnnotatedTag constructor")}static from(t){return new eo(t)}static render(t){return`object ${t.object}
// type ${t.type}
// tag ${t.tag}
// tagger ${ea(t.tagger)}

// ${t.message}
// ${t.gpgsig?t.gpgsig:""}`}justHeaders(){return this._tag.slice(0,this._tag.indexOf("\n\n"))}message(){let t=this.withoutSignature();return t.slice(t.indexOf("\n\n")+2)}parse(){return Object.assign(this.headers(),{message:this.message(),gpgsig:this.gpgsig()})}render(){return this._tag}headers(){let t=this.justHeaders().split("\n"),e=[];for(let r of t)" "===r[0]?e[e.length-1]+="\n"+r.slice(1):e.push(r);let r={};for(let t of e){let e=t.slice(0,t.indexOf(" ")),i=t.slice(t.indexOf(" ")+1);Array.isArray(r[e])?r[e].push(i):r[e]=i}return r.tagger&&(r.tagger=es(r.tagger)),r.committer&&(r.committer=es(r.committer)),r}withoutSignature(){let t=en(this._tag);return -1===t.indexOf("\n-----BEGIN PGP SIGNATURE-----")?t:t.slice(0,t.lastIndexOf("\n-----BEGIN PGP SIGNATURE-----"))}gpgsig(){if(-1!==this._tag.indexOf("\n-----BEGIN PGP SIGNATURE-----"))return en(this._tag.slice(this._tag.indexOf("-----BEGIN PGP SIGNATURE-----"),this._tag.indexOf("-----END PGP SIGNATURE-----")+27))}payload(){return this.withoutSignature()+"\n"}toObject(){return d.from(this._tag,"utf8")}static async sign(t,e,r){let i=t.payload(),{signature:a}=await e({payload:i,secretKey:r}),n=i+(a=en(a));return eo.from(n)}}function ec(t){return t.trim().split("\n").map(t=>" "+t).join("\n")+"\n"}class el{constructor(t){if("string"==typeof t)this._commit=t;else if(d.isBuffer(t))this._commit=t.toString("utf8");else if("object"==typeof t)this._commit=el.render(t);else throw new p("invalid type passed to GitCommit constructor")}static fromPayloadSignature({payload:t,signature:e}){let r=el.justHeaders(t),i=el.justMessage(t);return new el(en(r+"\ngpgsig"+ec(e)+"\n"+i))}static from(t){return new el(t)}toObject(){return d.from(this._commit,"utf8")}headers(){return this.parseHeaders()}message(){return el.justMessage(this._commit)}parse(){return Object.assign({message:this.message()},this.headers())}static justMessage(t){return en(t.slice(t.indexOf("\n\n")+2))}static justHeaders(t){return t.slice(0,t.indexOf("\n\n"))}parseHeaders(){let t=el.justHeaders(this._commit).split("\n"),e=[];for(let r of t)" "===r[0]?e[e.length-1]+="\n"+r.slice(1):e.push(r);let r={parent:[]};for(let t of e){let e=t.slice(0,t.indexOf(" ")),i=t.slice(t.indexOf(" ")+1);Array.isArray(r[e])?r[e].push(i):r[e]=i}return r.author&&(r.author=es(r.author)),r.committer&&(r.committer=es(r.committer)),r}static renderHeaders(t){let e="";if(t.tree?e+=`tree ${t.tree}
// `:e+=`tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904
// `,t.parent){if(void 0===t.parent.length)throw new p("commit 'parent' property should be an array");for(let r of t.parent)e+=`parent ${r}
// `}let r=t.author;e+=`author ${ea(r)}
// `;let i=t.committer||t.author;return e+=`committer ${ea(i)}
// `,t.gpgsig&&(e+="gpgsig"+ec(t.gpgsig)),e}static render(t){return el.renderHeaders(t)+"\n"+en(t.message)}render(){return this._commit}withoutSignature(){let t=en(this._commit);return -1===t.indexOf("\ngpgsig")?t:en(t.slice(0,t.indexOf("\ngpgsig"))+"\n"+t.slice(t.indexOf("-----END PGP SIGNATURE-----\n")+28))}isolateSignature(){return this._commit.slice(this._commit.indexOf("-----BEGIN PGP SIGNATURE-----"),this._commit.indexOf("-----END PGP SIGNATURE-----")+27).split("\n").map(t=>t.replace(/^ /,"")).join("\n")}static async sign(t,e,r){let i=t.withoutSignature(),a=el.justMessage(t._commit),{signature:n}=await e({payload:i,secretKey:r});n=en(n);let s=el.justHeaders(t._commit)+"\ngpgsig"+ec(n)+"\n"+a;return el.from(s)}}async function ef({fs:t,cache:e,gitdir:r,oid:i}){if("4b825dc642cb6eb9a060e54bf8d69288fbee4904"===i)return{tree:tE.from([]),oid:i};let{type:a,object:n}=await tW({fs:t,cache:e,gitdir:r,oid:i});if("tag"===a)return ef({fs:t,cache:e,gitdir:r,oid:i=eo.from(n).parse().object});if("commit"===a)return ef({fs:t,cache:e,gitdir:r,oid:i=el.from(n).parse().tree});if("tree"!==a)throw new W(i,a,"tree");return{tree:tE.from(n),oid:i}}class eu{constructor({fs:t,gitdir:e,ref:r,cache:i}){this.fs=t,this.cache=i,this.gitdir=e,this.mapPromise=(async()=>{let i;let a=new Map;try{i=await tb.resolve({fs:t,gitdir:e,ref:r})}catch(t){t instanceof z&&(i="4b825dc642cb6eb9a060e54bf8d69288fbee4904")}let n=await ef({fs:t,cache:this.cache,gitdir:e,oid:i});return n.type="tree",n.mode="40000",a.set(".",n),a})();let a=this;this.ConstructEntry=class{constructor(t){this._fullpath=t,this._type=!1,this._mode=!1,this._stat=!1,this._content=!1,this._oid=!1}async type(){return a.type(this)}async mode(){return a.mode(this)}async stat(){return a.stat(this)}async content(){return a.content(this)}async oid(){return a.oid(this)}}}async readdir(t){let e=t._fullpath,{fs:r,cache:i,gitdir:a}=this,n=await this.mapPromise,s=n.get(e);if(!s)throw Error(`No obj for ${e}`);let o=s.oid;if(!o)throw Error(`No oid for obj ${JSON.stringify(s)}`);if("tree"!==s.type)return null;let{type:c,object:l}=await tW({fs:r,cache:i,gitdir:a,oid:o});if(c!==s.type)throw new W(o,c,s.type);let f=tE.from(l);for(let t of f)n.set(J(e,t.path),t);return f.entries().map(t=>J(e,t.path))}async type(t){if(!1===t._type){let{type:e}=(await this.mapPromise).get(t._fullpath);t._type=e}return t._type}async mode(t){if(!1===t._mode){let{mode:e}=(await this.mapPromise).get(t._fullpath);t._mode=_(parseInt(e,8))}return t._mode}async stat(t){}async content(t){if(!1===t._content){let e=await this.mapPromise,{fs:r,cache:i,gitdir:a}=this,n=e.get(t._fullpath).oid,{type:s,object:o}=await tW({fs:r,cache:i,gitdir:a,oid:n});"blob"!==s?t._content=void 0:t._content=new Uint8Array(o)}return t._content}async oid(t){if(!1===t._oid){let e=(await this.mapPromise).get(t._fullpath);t._oid=e.oid}return t._oid}}function ed({ref:t="HEAD"}={}){let e=Object.create(null);return Object.defineProperty(e,T,{value:function({fs:e,gitdir:r,cache:i}){return new eu({fs:e,gitdir:r,ref:t,cache:i})}}),Object.freeze(e),e}class eh{constructor({fs:t,dir:e,gitdir:r,cache:i}){this.fs=t,this.cache=i,this.dir=e,this.gitdir=r;let a=this;this.ConstructEntry=class{constructor(t){this._fullpath=t,this._type=!1,this._mode=!1,this._stat=!1,this._content=!1,this._oid=!1}async type(){return a.type(this)}async mode(){return a.mode(this)}async stat(){return a.stat(this)}async content(){return a.content(this)}async oid(){return a.oid(this)}}}async readdir(t){let e=t._fullpath,{fs:r,dir:i}=this,a=await r.readdir(J(i,e));return null===a?null:a.map(t=>J(e,t))}async type(t){return!1===t._type&&await t.stat(),t._type}async mode(t){return!1===t._mode&&await t.stat(),t._mode}async stat(t){if(!1===t._stat){let{fs:e,dir:r}=this,i=await e.lstat(`${r}/${t._fullpath}`);if(!i)throw Error(`ENOENT: no such file or directory, lstat '${t._fullpath}'`);let a=i.isDirectory()?"tree":"blob";"blob"!==a||i.isFile()||i.isSymbolicLink()||(a="special"),t._type=a,i=x(i),t._mode=i.mode,-1===i.size&&t._actualSize&&(i.size=t._actualSize),t._stat=i}return t._stat}async content(t){if(!1===t._content){let{fs:e,dir:r,gitdir:i}=this;if(await t.type()==="tree")t._content=void 0;else{let a=await tm.get({fs:e,gitdir:i}),n=await a.get("core.autocrlf"),s=await e.read(`${r}/${t._fullpath}`,{autocrlf:n});t._actualSize=s.length,t._stat&&-1===t._stat.size&&(t._stat.size=t._actualSize),t._content=new Uint8Array(s)}}return t._content}async oid(t){if(!1===t._oid){let e;let{fs:r,gitdir:i,cache:a}=this;await C.acquire({fs:r,gitdir:i,cache:a},async function(a){let n=a.entriesMap.get(t._fullpath),s=await t.stat(),o=await tm.get({fs:r,gitdir:i}),c=await o.get("core.filemode"),l="win32"!==h.platform;!n||I(s,n,c,l)?void 0===await t.content()?e=void 0:(e=await k(tk.wrap({type:"blob",object:await t.content()})),n&&e===n.oid&&(!c||s.mode===n.mode)&&I(s,n,c,l)&&a.insert({filepath:t._fullpath,stats:s,oid:e})):e=n.oid}),t._oid=e}return t._oid}}function ew(){let t=Object.create(null);return Object.defineProperty(t,T,{value:function({fs:t,dir:e,gitdir:r,cache:i}){return new eh({fs:t,dir:e,gitdir:r,cache:i})}}),Object.freeze(t),t}let em=void 0===Array.prototype.flat?t=>t.reduce((t,e)=>t.concat(e),[]):t=>t.flat();class ep{constructor(){this.value=null}consider(t){null!=t&&(null===this.value?this.value=t:t<this.value&&(this.value=t))}reset(){this.value=null}}async function eg({fs:t,cache:e,dir:r,gitdir:i,trees:a,map:n=async(t,e)=>e,reduce:s=async(t,e)=>{let r=em(e);return void 0!==t&&r.unshift(t),r},iterate:o=(t,e)=>Promise.all([...e].map(t))}){let c=a.map(a=>a[T]({fs:t,dir:r,gitdir:i,cache:e})),l=Array(c.length).fill("."),f=Array.from({length:c.length-0},(t,e)=>0+e),u=async t=>{f.map(e=>{t[e]=t[e]&&new c[e].ConstructEntry(t[e])});let e=(await Promise.all(f.map(e=>t[e]?c[e].readdir(t[e]):[]))).map(t=>null===t?[]:t).map(t=>t[Symbol.iterator]());return{entries:t,children:function*(t){let e;let r=new ep,i=[],a=t.length;for(let e=0;e<a;e++)i[e]=t[e].next().value,void 0!==i[e]&&r.consider(i[e]);if(null!==r.value)for(;;){let n=[];e=r.value,r.reset();for(let s=0;s<a;s++)void 0!==i[s]&&i[s]===e?(n[s]=i[s],i[s]=t[s].next().value):n[s]=null,void 0!==i[s]&&r.consider(i[s]);if(yield n,null===r.value)return}}(e)}},d=async t=>{let{entries:e,children:r}=await u(t),i=e.find(t=>t&&t._fullpath)._fullpath,a=await n(i,e);if(null!==a){let t=await o(d,r);return s(a,t=t.filter(t=>void 0!==t))}};return d(l)}async function ey(t,e){let r=await t.readdir(e);null==r?await t.rm(e):r.length?await Promise.all(r.map(r=>{let i=J(e,r);return t.lstat(i).then(e=>{if(e)return e.isDirectory()?ey(t,i):t.rm(i)})})).then(()=>t.rmdir(e)):await t.rmdir(e)}function eb(t){return"function"==typeof t}function e$(t){var e,r;return(r=e=(t=>{try{return t.readFile().catch(t=>t)}catch(t){return t}})(t))&&"object"==typeof r&&eb(e.then)&&eb(e.catch)}let e_=["readFile","writeFile","mkdir","rmdir","unlink","stat","lstat","readdir","readlink","symlink"];function ev(t,e){if(e$(e))for(let r of e_)t[`_${r}`]=e[r].bind(e);else for(let r of e_)t[`_${r}`]=c(e[r].bind(e));e$(e)?e.rm?t._rm=e.rm.bind(e):e.rmdir.length>1?t._rm=e.rmdir.bind(e):t._rm=ey.bind(null,t):e.rm?t._rm=c(e.rm.bind(e)):e.rmdir.length>2?t._rm=c(e.rmdir.bind(e)):t._rm=ey.bind(null,t)}class ex{constructor(t){if(void 0!==t._original_unwrapped_fs)return t;let e=Object.getOwnPropertyDescriptor(t,"promises");e&&e.enumerable?ev(this,t.promises):ev(this,t),this._original_unwrapped_fs=t}async exists(t,e={}){try{return await this._stat(t),!0}catch(t){if("ENOENT"===t.code||"ENOTDIR"===t.code)return!1;throw console.log('Unhandled error in "FileSystem.exists()" function',t),t}}async read(t,e={}){try{let r=await this._readFile(t,e);if("true"===e.autocrlf)try{r=(r=new TextDecoder("utf8",{fatal:!0}).decode(r)).replace(/\r\n/g,"\n"),r=new TextEncoder().encode(r)}catch(t){}return"string"!=typeof r&&(r=d.from(r)),r}catch(t){return null}}async write(t,e,r={}){try{await this._writeFile(t,e,r);return}catch(i){await this.mkdir(N(t)),await this._writeFile(t,e,r)}}async mkdir(t,e=!1){try{await this._mkdir(t);return}catch(r){if(null===r||"EEXIST"===r.code)return;if(e)throw r;if("ENOENT"===r.code){let e=N(t);if("."===e||"/"===e||e===t)throw r;await this.mkdir(e),await this.mkdir(t,!0)}}}async rm(t){try{await this._unlink(t)}catch(t){if("ENOENT"!==t.code)throw t}}async rmdir(t,e){try{e&&e.recursive?await this._rm(t,e):await this._rmdir(t)}catch(t){if("ENOENT"!==t.code)throw t}}async readdir(t){try{let e=await this._readdir(t);return e.sort(b),e}catch(t){if("ENOTDIR"===t.code)return null;return[]}}async readdirDeep(t){let e=await this._readdir(t);return(await Promise.all(e.map(async e=>{let r=t+"/"+e;return(await this._stat(r)).isDirectory()?this.readdirDeep(r):r}))).reduce((t,e)=>t.concat(e),[])}async lstat(t){try{return await this._lstat(t)}catch(t){if("ENOENT"===t.code)return null;throw t}}async readlink(t,e={encoding:"buffer"}){try{let r=await this._readlink(t,e);return d.isBuffer(r)?r:d.from(r)}catch(t){if("ENOENT"===t.code)return null;throw t}}async writelink(t,e){return this._symlink(e.toString("utf8"),t)}}function eE(t,e){if(void 0===e)throw new t8(t)}async function ek(t,e){return(!!t||!!e)&&(!!t&&!e||!t&&!!e||(await t.type()!=="tree"||await e.type()!=="tree")&&(await t.type()!==await e.type()||await t.mode()!==await e.mode()||await t.oid()!==await e.oid()))}async function eS({fs:t,dir:e,gitdir:r=J(e,".git"),commit:i="HEAD",cache:a={}}){try{eE("fs",t),eE("dir",e),eE("gitdir",r);let n=new ex(t),s=[ed({ref:i}),ew(),H()],o=[];await C.acquire({fs:n,gitdir:r,cache:a},async function(t){o=t.unmergedPaths});let c=await eg({fs:n,cache:a,dir:e,gitdir:r,trees:s,map:async function(t,[e,r,i]){let a=!await ek(r,i),n=o.includes(t),s=!await ek(i,e);if(a||n)return e?{path:t,mode:await e.mode(),oid:await e.oid(),type:await e.type(),content:await e.content()}:void 0;if(s)return!1;throw new er(t)}});await C.acquire({fs:n,gitdir:r,cache:a},async function(t){for(let r of c)if(!1!==r){if(!r){await n.rmdir(`${e}/${r.path}`,{recursive:!0}),t.delete({filepath:r.path});continue}if("blob"===r.type){let i=new TextDecoder().decode(r.content);await n.write(`${e}/${r.path}`,i,{mode:r.mode}),t.insert({filepath:r.path,oid:r.oid,stage:0})}}})}catch(t){throw t.caller="git.abortMerge",t}}class ej{static async isIgnored({fs:t,dir:e,gitdir:r=J(e,".git"),filepath:i}){if(".git"===B(i))return!0;if("."===i)return!1;let a="",n=J(r,"info","exclude");await t.exists(n)&&(a=await t.read(n,"utf8"));let s=[{gitignore:J(e,".gitignore"),filepath:i}],o=i.split("/").filter(Boolean);for(let t=1;t<o.length;t++){let r=o.slice(0,t).join("/"),i=o.slice(t).join("/");s.push({gitignore:J(e,r,".gitignore"),filepath:i})}let c=!1;for(let e of s){let r;try{r=await t.read(e.gitignore,"utf8")}catch(t){if("NOENT"===t.code)continue}let i=l().add(a);i.add(r);let n=N(e.filepath);if("."!==n&&i.ignores(n))return!0;c=c?!i.test(e.filepath).unignored:i.test(e.filepath).ignored}return c}}async function eR({fs:t,gitdir:e,object:r,format:i,oid:a}){if("deflated"!==i)throw new p("GitObjectStoreLoose expects objects to write to be in deflated format");let n=`objects/${a.slice(0,2)}/${a.slice(2)}`,s=`${e}/${n}`;await t.exists(s)||await t.write(s,r)}let eI=null;async function eO(t){return null===eI&&(eI=function(){try{return new CompressionStream("deflate").writable.close(),new Blob([]).stream().cancel(),!0}catch(t){return!1}}()),eI?eP(t):o.deflate(t)}async function eP(t){let e=new CompressionStream("deflate"),r=new Blob([t]).stream().pipeThrough(e);return new Uint8Array(await new Response(r).arrayBuffer())}async function eA({fs:t,gitdir:e,type:r,object:i,format:a="content",oid:n,dryRun:s=!1}){return"deflated"!==a&&("wrapped"!==a&&(i=tk.wrap({type:r,object:i})),n=await k(i),i=d.from(await eO(i))),s||await eR({fs:t,gitdir:e,object:i,format:"deflated",oid:n}),n}function eU(t){let e;for(;~(e=t.indexOf(92));)t[e]=47;return t}async function eC({fs:t,dir:e,gitdir:r=J(e,".git"),filepath:i,cache:a={},force:n=!1,parallel:s=!0}){try{eE("fs",t),eE("dir",e),eE("gitdir",r),eE("filepath",i);let o=new ex(t);await C.acquire({fs:o,gitdir:r,cache:a},async t=>eB({dir:e,gitdir:r,fs:o,filepath:i,index:t,force:n,parallel:s}))}catch(t){throw t.caller="git.add",t}}async function eB({dir:t,gitdir:e,fs:r,filepath:i,index:a,force:n,parallel:s}){let o=(i=Array.isArray(i)?i:[i]).map(async i=>{if(!n&&await ej.isIgnored({fs:r,dir:t,gitdir:e,filepath:i}))return;let o=await r.lstat(J(t,i));if(!o)throw new z(i);if(o.isDirectory()){let o=await r.readdir(J(t,i));if(s){let c=o.map(o=>eB({dir:t,gitdir:e,fs:r,filepath:[J(i,o)],index:a,force:n,parallel:s}));await Promise.all(c)}else for(let c of o)await eB({dir:t,gitdir:e,fs:r,filepath:[J(i,c)],index:a,force:n,parallel:s})}else{let n=await tm.get({fs:r,gitdir:e}),s=await n.get("core.autocrlf"),c=o.isSymbolicLink()?await r.readlink(J(t,i)).then(eU):await r.read(J(t,i),{autocrlf:s});if(null===c)throw new z(i);let l=await eA({fs:r,gitdir:e,type:"blob",object:c});a.insert({filepath:i,stats:o,oid:l})}}),c=await Promise.allSettled(o),l=c.filter(t=>"rejected"===t.status).map(t=>t.reason);if(l.length>1)throw new t4(l);if(1===l.length)throw l[0];return c.filter(t=>"fulfilled"===t.status&&t.value).map(t=>t.value)}async function eN({fs:t,cache:e,onSign:r,gitdir:i,message:a,author:n,committer:s,signingKey:o,dryRun:c=!1,noUpdateBranch:l=!1,ref:f,parent:u,tree:d}){return f||(f=await tb.resolve({fs:t,gitdir:i,ref:"HEAD",depth:2})),C.acquire({fs:t,gitdir:i,cache:e,allowUnmerged:!1},async function(e){let h=D(e.entries).get(".");if(d||(d=await eD({fs:t,gitdir:i,inode:h,dryRun:c})),u)u=await Promise.all(u.map(e=>tb.resolve({fs:t,gitdir:i,ref:e})));else try{u=[await tb.resolve({fs:t,gitdir:i,ref:f})]}catch(t){u=[]}let w=el.from({tree:d,parent:u,author:n,committer:s,message:a});o&&(w=await el.sign(w,r,o));let m=await eA({fs:t,gitdir:i,type:"commit",object:w.toObject(),dryRun:c});return l||c||await tb.writeRef({fs:t,gitdir:i,ref:f,value:m}),m})}async function eD({fs:t,gitdir:e,inode:r,dryRun:i}){let a=r.children;for(let r of a)"tree"===r.type&&(r.metadata.mode="040000",r.metadata.oid=await eD({fs:t,gitdir:e,inode:r,dryRun:i}));let n=a.map(t=>({mode:t.metadata.mode,path:t.basename,oid:t.metadata.oid,type:t.type})),s=tE.from(n);return await eA({fs:t,gitdir:e,type:"tree",object:s.toObject(),dryRun:i})}async function eM({fs:t,cache:e,gitdir:r,oid:i,filepath:a}){if(a.startsWith("/"))throw new tJ("leading-slash");if(a.endsWith("/"))throw new tJ("trailing-slash");let n=i,s=await ef({fs:t,cache:e,gitdir:r,oid:i}),o=s.tree;if(""===a)i=s.oid;else{let s=a.split("/");i=await eT({fs:t,cache:e,gitdir:r,tree:o,pathArray:s,oid:n,filepath:a})}return i}async function eT({fs:t,cache:e,gitdir:r,tree:i,pathArray:a,oid:n,filepath:s}){let o=a.shift();for(let c of i)if(c.path===o){if(0===a.length)return c.oid;{let{type:o,object:l}=await tW({fs:t,cache:e,gitdir:r,oid:c.oid});if("tree"!==o)throw new W(n,o,"tree",s);return eT({fs:t,cache:e,gitdir:r,tree:i=tE.from(l),pathArray:a,oid:n,filepath:s})}}throw new z(`file or directory found at "${n}:${s}"`)}async function eH({fs:t,cache:e,gitdir:r,oid:i,filepath:a}){void 0!==a&&(i=await eM({fs:t,cache:e,gitdir:r,oid:i,filepath:a}));let{tree:n,oid:s}=await ef({fs:t,cache:e,gitdir:r,oid:i});return{oid:s,tree:n.entries()}}async function ez({fs:t,gitdir:e,tree:r}){let i=tE.from(r).toObject();return await eA({fs:t,gitdir:e,type:"tree",object:i,format:"content"})}async function eW({fs:t,cache:e,onSign:r,gitdir:i,ref:a,oid:n,note:s,force:o,author:c,committer:l,signingKey:f}){let u;try{u=await tb.resolve({gitdir:i,fs:t,ref:a})}catch(t){if(!(t instanceof z))throw t}let h=(await eH({fs:t,cache:e,gitdir:i,oid:u||"4b825dc642cb6eb9a060e54bf8d69288fbee4904"})).tree;if(o)h=h.filter(t=>t.path!==n);else for(let t of h)if(t.path===n)throw new tF("note",n);"string"==typeof s&&(s=d.from(s,"utf8"));let w=await eA({fs:t,gitdir:i,type:"blob",object:s,format:"content"});h.push({mode:"100644",path:n,oid:w,type:"blob"});let m=await ez({fs:t,gitdir:i,tree:h});return await eN({fs:t,cache:e,onSign:r,gitdir:i,ref:a,tree:m,parent:u&&[u],message:`Note added by 'isomorphic-git addNote'
// `,author:c,committer:l,signingKey:f})}async function eF({fs:t,gitdir:e,path:r}){return(await tm.get({fs:t,gitdir:e})).get(r)}async function eG({fs:t,gitdir:e,author:r={}}){let{name:i,email:a,timestamp:n,timezoneOffset:s}=r;if(i=i||await eF({fs:t,gitdir:e,path:"user.name"}),a=a||await eF({fs:t,gitdir:e,path:"user.email"})||"",void 0!==i)return n=null!=n?n:Math.floor(Date.now()/1e3),s=null!=s?s:new Date(1e3*n).getTimezoneOffset(),{name:i,email:a,timestamp:n,timezoneOffset:s}}async function eq({fs:t,gitdir:e,author:r,committer:i}){return i=Object.assign({},i||r),r&&(i.timestamp=i.timestamp||r.timestamp,i.timezoneOffset=i.timezoneOffset||r.timezoneOffset),i=await eG({fs:t,gitdir:e,author:i})}async function eL({fs:t,onSign:e,dir:r,gitdir:i=J(r,".git"),ref:a="refs/notes/commits",oid:n,note:s,force:o,author:c,committer:l,signingKey:f,cache:u={}}){try{eE("fs",t),eE("gitdir",i),eE("oid",n),eE("note",s),f&&eE("onSign",e);let r=new ex(t),d=await eG({fs:r,gitdir:i,author:c});if(!d)throw new t2("author");let h=await eq({fs:r,gitdir:i,author:d,committer:l});if(!h)throw new t2("committer");return await eW({fs:new ex(r),cache:u,onSign:e,gitdir:i,ref:a,oid:n,note:s,force:o,author:d,committer:h,signingKey:f})}catch(t){throw t.caller="git.addNote",t}}async function eV({fs:t,gitdir:e,remote:r,url:i,force:a}){if(r!==f.clean(r))throw new tX(r,f.clean(r));let n=await tm.get({fs:t,gitdir:e});if(!a&&(await n.getSubsections("remote")).includes(r)&&i!==await n.get(`remote.${r}.url`))throw new tF("remote",r);await n.set(`remote.${r}.url`,i),await n.set(`remote.${r}.fetch`,`+refs/heads/*:refs/remotes/${r}/*`),await tm.save({fs:t,gitdir:e,config:n})}async function eK({fs:t,dir:e,gitdir:r=J(e,".git"),remote:i,url:a,force:n=!1}){try{return eE("fs",t),eE("gitdir",r),eE("remote",i),eE("url",a),await eV({fs:new ex(t),gitdir:r,remote:i,url:a,force:n})}catch(t){throw t.caller="git.addRemote",t}}async function eZ({fs:t,cache:e,onSign:r,gitdir:i,ref:a,tagger:n,message:s=a,gpgsig:o,object:c,signingKey:l,force:f=!1}){if(a=a.startsWith("refs/tags/")?a:`refs/tags/${a}`,!f&&await tb.exists({fs:t,gitdir:i,ref:a}))throw new tF("tag",a);let u=await tb.resolve({fs:t,gitdir:i,ref:c||"HEAD"}),{type:d}=await tW({fs:t,cache:e,gitdir:i,oid:u}),h=eo.from({object:u,type:d,tag:a.replace("refs/tags/",""),tagger:n,message:s,gpgsig:o});l&&(h=await eo.sign(h,r,l));let w=await eA({fs:t,gitdir:i,type:"tag",object:h.toObject()});await tb.writeRef({fs:t,gitdir:i,ref:a,value:w})}async function eY({fs:t,onSign:e,dir:r,gitdir:i=J(r,".git"),ref:a,tagger:n,message:s=a,gpgsig:o,object:c,signingKey:l,force:f=!1,cache:u={}}){try{eE("fs",t),eE("gitdir",i),eE("ref",a),l&&eE("onSign",e);let r=new ex(t),d=await eG({fs:r,gitdir:i,author:n});if(!d)throw new t2("tagger");return await eZ({fs:r,cache:u,onSign:e,gitdir:i,ref:a,tagger:d,message:s,gpgsig:o,object:c,signingKey:l,force:f})}catch(t){throw t.caller="git.annotatedTag",t}}async function eJ({fs:t,gitdir:e,ref:r,object:i,checkout:a=!1,force:n=!1}){let s;if(r!==f.clean(r))throw new tX(r,f.clean(r));let o=`refs/heads/${r}`;if(!n&&await tb.exists({fs:t,gitdir:e,ref:o}))throw new tF("branch",r,!1);try{s=await tb.resolve({fs:t,gitdir:e,ref:i||"HEAD"})}catch(t){}s&&await tb.writeRef({fs:t,gitdir:e,ref:o,value:s}),a&&await tb.writeSymbolicRef({fs:t,gitdir:e,ref:"HEAD",value:o})}async function eX({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i,object:a,checkout:n=!1,force:s=!1}){try{return eE("fs",t),eE("gitdir",r),eE("ref",i),await eJ({fs:new ex(t),gitdir:r,ref:i,object:a,checkout:n,force:s})}catch(t){throw t.caller="git.branch",t}}let eQ=(t,e)=>"."===t||null==e||0===e.length||"."===e||(e.length>=t.length?e.startsWith(t):t.startsWith(e));async function e0({fs:t,cache:e,onProgress:r,dir:i,gitdir:a,remote:n,ref:s,filepaths:o,noCheckout:c,noUpdateHead:l,dryRun:f,force:u,track:d=!0}){let h;try{h=await tb.resolve({fs:t,gitdir:a,ref:s})}catch(r){if("HEAD"===s)throw r;let e=`${n}/${s}`;if(h=await tb.resolve({fs:t,gitdir:a,ref:e}),d){let e=await tm.get({fs:t,gitdir:a});await e.set(`branch.${s}.remote`,n),await e.set(`branch.${s}.merge`,`refs/heads/${s}`),await tm.save({fs:t,gitdir:a,config:e})}await tb.writeRef({fs:t,gitdir:a,ref:`refs/heads/${s}`,value:h})}if(!c){let n;try{n=await e1({fs:t,cache:e,onProgress:r,dir:i,gitdir:a,ref:s,force:u,filepaths:o})}catch(t){if(t instanceof z&&t.data.what===h)throw new tL(s,h);throw t}let c=n.filter(([t])=>"conflict"===t).map(([t,e])=>e);if(c.length>0)throw new tq(c);let l=n.filter(([t])=>"error"===t).map(([t,e])=>e);if(l.length>0)throw new p(l.join(", "));if(f)return;let d=0,w=n.length;await C.acquire({fs:t,gitdir:a,cache:e},async function(e){await Promise.all(n.filter(([t])=>"delete"===t||"delete-index"===t).map(async function([a,n]){let s=`${i}/${n}`;"delete"===a&&await t.rm(s),e.delete({filepath:n}),r&&await r({phase:"Updating workdir",loaded:++d,total:w})}))}),await C.acquire({fs:t,gitdir:a,cache:e},async function(e){for(let[a,s]of n)if("rmdir"===a||"rmdir-index"===a){let n=`${i}/${s}`;try{"rmdir-index"===a&&e.delete({filepath:s}),await t.rmdir(n),r&&await r({phase:"Updating workdir",loaded:++d,total:w})}catch(t){if("ENOTEMPTY"===t.code)console.log(`Did not delete ${s} because directory is not empty`);else throw t}}}),await Promise.all(n.filter(([t])=>"mkdir"===t||"mkdir-index"===t).map(async function([e,a]){let n=`${i}/${a}`;await t.mkdir(n),r&&await r({phase:"Updating workdir",loaded:++d,total:w})})),await C.acquire({fs:t,gitdir:a,cache:e},async function(s){await Promise.all(n.filter(([t])=>"create"===t||"create-index"===t||"update"===t||"mkdir-index"===t).map(async function([n,o,c,l,f]){let u=`${i}/${o}`;try{if("create-index"!==n&&"mkdir-index"!==n){let{object:r}=await tW({fs:t,cache:e,gitdir:a,oid:c});if(f&&await t.rm(u),33188===l)await t.write(u,r);else if(33261===l)await t.write(u,r,{mode:511});else if(40960===l)await t.writelink(u,r);else throw new p(`Invalid mode 0o${l.toString(8)} detected in blob ${c}`)}let i=await t.lstat(u);33261===l&&(i.mode=493),"mkdir-index"===n&&(i.mode=57344),s.insert({filepath:o,stats:i,oid:c}),r&&await r({phase:"Updating workdir",loaded:++d,total:w})}catch(t){console.log(t)}}))})}if(!l){let e=await tb.expand({fs:t,gitdir:a,ref:s});e.startsWith("refs/heads")?await tb.writeSymbolicRef({fs:t,gitdir:a,ref:"HEAD",value:e}):await tb.writeRef({fs:t,gitdir:a,ref:"HEAD",value:h})}}async function e1({fs:t,cache:e,onProgress:r,dir:i,gitdir:a,ref:n,force:s,filepaths:o}){let c=0;return eg({fs:t,cache:e,dir:i,gitdir:a,trees:[ed({ref:n}),ew(),H()],map:async function(t,[e,i,a]){if("."!==t){if(o&&!o.some(e=>eQ(t,e)))return null;switch(r&&await r({phase:"Analyzing workdir",loaded:++c}),[!!a,!!e,!!i].map(Number).join("")){case"000":return;case"001":if(s&&o&&o.includes(t))return["delete",t];return;case"010":switch(await e.type()){case"tree":return["mkdir",t];case"blob":return["create",t,await e.oid(),await e.mode()];case"commit":return["mkdir-index",t,await e.oid(),await e.mode()];default:return["error",`new entry Unhandled type ${await e.type()}`]}case"011":switch(`${await e.type()}-${await i.type()}`){case"tree-tree":case"commit-tree":return;case"tree-blob":case"blob-tree":case"commit-blob":return["conflict",t];case"blob-blob":if(await e.oid()!==await i.oid()){if(s)return["update",t,await e.oid(),await e.mode(),await e.mode()!==await i.mode()];return["conflict",t]}if(await e.mode()===await i.mode())return["create-index",t,await e.oid(),await e.mode()];if(s)return["update",t,await e.oid(),await e.mode(),!0];return["conflict",t];default:return["error",`new entry Unhandled type ${e.type}`]}case"100":return["delete-index",t];case"101":switch(await a.type()){case"tree":return["rmdir",t];case"blob":if(await a.oid()===await i.oid()||s)return["delete",t];return["conflict",t];case"commit":return["rmdir-index",t];default:return["error",`delete entry Unhandled type ${await a.type()}`]}case"110":case"111":switch(`${await a.type()}-${await e.type()}`){case"tree-tree":return;case"blob-blob":if(await a.oid()===await e.oid()&&await a.mode()===await e.mode()&&!s)return;if(i){if(await i.oid()!==await a.oid()&&await i.oid()!==await e.oid()){if(s)return["update",t,await e.oid(),await e.mode(),await e.mode()!==await i.mode()];return["conflict",t]}}else if(s)return["update",t,await e.oid(),await e.mode(),await e.mode()!==await a.mode()];if(await e.mode()!==await a.mode())return["update",t,await e.oid(),await e.mode(),!0];if(await e.oid()!==await a.oid())return["update",t,await e.oid(),await e.mode(),!1];return;case"tree-blob":return["update-dir-to-blob",t,await e.oid()];case"blob-tree":return["update-blob-to-tree",t];case"commit-commit":return["mkdir-index",t,await e.oid(),await e.mode()];default:return["error",`update entry Unhandled type ${await a.type()}-${await e.type()}`]}}}},reduce:async function(t,e){return e=em(e),t&&(t&&"rmdir"===t[0]?e.push(t):e.unshift(t)),e}})}async function e2({fs:t,onProgress:e,dir:r,gitdir:i=J(r,".git"),remote:a="origin",ref:n,filepaths:s,noCheckout:o=!1,noUpdateHead:c=void 0===n,dryRun:l=!1,force:f=!1,track:u=!0,cache:d={}}){try{return eE("fs",t),eE("dir",r),eE("gitdir",i),await e0({fs:new ex(t),cache:d,onProgress:e,dir:r,gitdir:i,remote:a,ref:n||"HEAD",filepaths:s,noCheckout:o,noUpdateHead:c,dryRun:l,force:f,track:u})}catch(t){throw t.caller="git.checkout",t}}let e8=RegExp("^refs/(heads/|tags/|remotes/)?(.*)");function e4(t){let e=e8.exec(t);return e?"remotes/"===e[1]&&t.endsWith("/HEAD")?e[2].slice(0,-5):e[2]:t}async function e6({fs:t,gitdir:e,fullname:r=!1,test:i=!1}){let a=await tb.resolve({fs:t,gitdir:e,ref:"HEAD",depth:2});if(i)try{await tb.resolve({fs:t,gitdir:e,ref:a})}catch(t){return}if(a.startsWith("refs/"))return r?a:e4(a)}function e3({username:t="",password:e=""}){return`Basic ${d.from(`${t}:${e}`).toString("base64")}`}async function e9(t,e){let r=tO(t);for(;;){let{value:t,done:i}=await r.next();if(t&&await e(t),i)break}r.return&&r.return()}async function e5(t){let e=0,r=[];await e9(t,t=>{r.push(t),e+=t.byteLength});let i=new Uint8Array(e),a=0;for(let t of r)i.set(t,a),a+=t.byteLength;return i}function e7(t){let e=t.match(/^https?:\/\/([^/]+)@/);if(null==e)return{url:t,auth:{}};let[r,i]=(e=e[1]).split(":");return{url:t=t.replace(`${e}@`,""),auth:{username:r,password:i}}}function rt(t,e){let r=e.toString(16);return"0".repeat(t-r.length)+r}class re{static flush(){return d.from("0000","utf8")}static delim(){return d.from("0001","utf8")}static encode(t){"string"==typeof t&&(t=d.from(t));let e=rt(4,t.length+4);return d.concat([d.from(e,"utf8"),t])}static streamReader(t){let e=new tP(t);return async function(){try{let t=await e.read(4);if(null==t)return!0;if(t=parseInt(t.toString("utf8"),16),0===t||1===t)return null;let r=await e.read(t-4);if(null==r)return!0;return r}catch(e){return t.error=e,!0}}}}async function rr(t){let e;let r={};for(;!0!==(e=await t());){if(null===e)continue;let t=(e=e.toString("utf8").replace(/\n$/,"")).indexOf("=");if(t>-1){let i=e.slice(0,t),a=e.slice(t+1);r[i]=a}else r[e]=!0}return{protocolVersion:2,capabilities2:r}}async function ri(t,{service:e}){let r=new Set,i=new Map,a=new Map,n=re.streamReader(t),s=await n();for(;null===s;)s=await n();if(!0===s)throw new tV;if(s.includes("version 2"))return rr(n);if(s.toString("utf8").replace(/\n$/,"")!==`# service=${e}`)throw new t6(`# service=${e}\\n`,s.toString("utf8"));let o=await n();for(;null===o;)o=await n();if(!0===o)return{capabilities:r,refs:i,symrefs:a};if((o=o.toString("utf8")).includes("version 2"))return rr(n);let[c,l]=ra(o,"\0","\\x00");if(l.split(" ").map(t=>r.add(t)),"0000000000000000000000000000000000000000 capabilities^{}"!==c){let[t,e]=ra(c," "," ");for(i.set(e,t);;){let t=await n();if(!0===t)break;if(null!==t){let[e,r]=ra(t.toString("utf8")," "," ");i.set(r,e)}}}for(let t of r)if(t.startsWith("symref=")){let e=t.match(/symref=([^:]+):(.*)/);3===e.length&&a.set(e[1],e[2])}return{protocolVersion:1,capabilities:r,refs:i,symrefs:a}}function ra(t,e,r){let i=t.trim().split(e);if(2!==i.length)throw new t6(`Two strings separated by '${r}'`,t.toString("utf8"));return i}let rn=(t,e)=>t.endsWith("?")?`${t}${e}`:`${t}/${e.replace(/^https?:\/\//,"")}`,rs=(t,e)=>{(e.username||e.password)&&(t.Authorization=e3(e)),e.headers&&Object.assign(t,e.headers)},ro=async t=>{try{let e=d.from(await e5(t.body)),r=e.toString("utf8");return{preview:r.length<256?r:r.slice(0,256)+"...",response:r,data:e}}catch(t){return{}}};class rc{static async capabilities(){return["discover","connect"]}static async discover({http:t,onProgress:e,onAuth:r,onAuthSuccess:i,onAuthFailure:a,corsProxy:n,service:s,url:o,headers:c,protocolVersion:l}){let f,u,{url:d,auth:h}=e7(o),w=n?rn(n,d):d;(h.username||h.password)&&(c.Authorization=e3(h)),2===l&&(c["Git-Protocol"]="version=2");let m=!1;do if(f=await t.request({onProgress:e,method:"GET",url:`${w}/info/refs?service=${s}`,headers:c}),u=!1,401===f.statusCode||203===f.statusCode){let t=m?a:r;if(t){if((h=await t(d,{...h,headers:{...c}}))&&h.cancel)throw new ee;h&&(rs(c,h),m=!0,u=!0)}}else 200===f.statusCode&&m&&i&&await i(d,h);while(u);if(200!==f.statusCode){let{response:t}=await ro(f);throw new tY(f.statusCode,f.statusMessage,t)}if(f.headers["content-type"]===`application/x-${s}-advertisement`){let t=await ri(f.body,{service:s});return t.auth=h,t}{let{preview:t,response:e,data:r}=await ro(f);try{let t=await ri([r],{service:s});return t.auth=h,t}catch(r){throw new t5(t,e)}}}static async connect({http:t,onProgress:e,corsProxy:r,service:i,url:a,auth:n,body:s,headers:o}){let c=e7(a);c&&(a=c.url),r&&(a=rn(r,a)),o["content-type"]=`application/x-${i}-request`,o.accept=`application/x-${i}-result`,rs(o,n);let l=await t.request({onProgress:e,method:"POST",url:`${a}/${i}`,body:s,headers:o});if(200!==l.statusCode){let{response:t}=ro(l);throw new tY(l.statusCode,l.statusMessage,t)}return l}}class rl{static getRemoteHelperFor({url:t}){let e=new Map;e.set("http",rc),e.set("https",rc);let r=function({url:t}){if(t.startsWith("git@"))return{transport:"ssh",address:t};let e=t.match(/(\w+)(:\/\/|::)(.*)/);if(null!==e){if("://"===e[2])return{transport:e[1],address:e[0]};if("::"===e[2])return{transport:e[1],address:e[3]}}}({url:t});if(!r)throw new et(t);if(e.has(r.transport))return e.get(r.transport);throw new t7(t,r.transport,"ssh"===r.transport?t.replace(/^git@([^:]+):/,"https://$1/").replace(/^ssh:\/\//,"https://"):void 0)}}let rf=null;class ru{static async read({fs:t,gitdir:e}){null===rf&&(rf=new a);let r=J(e,"shallow"),i=new Set;return await rf.acquire(r,async function(){let e=await t.read(r,{encoding:"utf8"});if(null===e||""===e.trim())return i;e.trim().split("\n").map(t=>i.add(t))}),i}static async write({fs:t,gitdir:e,oids:r}){null===rf&&(rf=new a);let i=J(e,"shallow");if(r.size>0){let e=[...r].join("\n")+"\n";await rf.acquire(i,async function(){await t.write(i,e,{encoding:"utf8"})})}else await rf.acquire(i,async function(){await t.rm(i)})}}async function rd({fs:t,gitdir:e,oid:r}){let i=`objects/${r.slice(0,2)}/${r.slice(2)}`;return t.exists(`${e}/${i}`)}async function rh({fs:t,cache:e,gitdir:r,oid:i,getExternalRefDelta:a}){let n=await t.readdir(J(r,"objects/pack"));for(let s of n=n.filter(t=>t.endsWith(".idx"))){let n=`${r}/objects/pack/${s}`,o=await tH({fs:t,cache:e,filename:n,getExternalRefDelta:a});if(o.error)throw new p(o.error);if(o.offsets.has(i))return!0}return!1}async function rw({fs:t,cache:e,gitdir:r,oid:i,format:a="content"}){let n=await rd({fs:t,gitdir:r,oid:i});return n||(n=await rh({fs:t,cache:e,gitdir:r,oid:i,getExternalRefDelta:i=>tW({fs:t,cache:e,gitdir:r,oid:i})})),n}function rm(t,e){let r=t.map(t=>t.split("=",1)[0]);return e.filter(t=>{let e=t.split("=",1)[0];return r.includes(e)})}let rp={version:"1.25.10",agent:"git/isomorphic-git@1.25.10"};class rg{constructor(){this._queue=[]}write(t){if(this._ended)throw Error("You cannot write to a FIFO that has already been ended!");if(this._waiting){let e=this._waiting;this._waiting=null,e({value:t})}else this._queue.push(t)}end(){if(this._ended=!0,this._waiting){let t=this._waiting;this._waiting=null,t({done:!0})}}destroy(t){this.error=t,this.end()}async next(){if(this._queue.length>0)return{value:this._queue.shift()};if(this._ended)return{done:!0};if(this._waiting)throw Error("You cannot call read until the previous call to read has returned!");return new Promise(t=>{this._waiting=t})}}function ry(t){let e=new rg,r="";return(async()=>{await e9(t,t=>{for(t=t.toString("utf8"),r+=t;;){let t=function(t){let e=t.indexOf("\r"),r=t.indexOf("\n");return -1===e&&-1===r?-1:-1===e?r+1:-1===r?e+1:r===e+1?r+1:Math.min(e,r)+1}(r);if(-1===t)break;e.write(r.slice(0,t)),r=r.slice(t)}}),r.length>0&&e.write(r),e.end()})(),e}class rb{static demux(t){let e=re.streamReader(t),r=new rg,i=new rg,a=new rg,n=async function(){let s=await e();if(null===s)return n();if(!0===s){r.end(),a.end(),t.error?i.destroy(t.error):i.end();return}switch(s[0]){case 1:i.write(s.slice(1));break;case 2:a.write(s.slice(1));break;case 3:{let t=s.slice(1);a.write(t),r.end(),a.end(),i.destroy(Error(t.toString("utf8")));return}default:r.write(s)}n()};return n(),{packetlines:r,packfile:i,progress:a}}}async function r$(t){let{packetlines:e,packfile:r,progress:i}=rb.demux(t),a=[],n=[],s=[],o=!1,c=!1;return new Promise((l,f)=>{e9(e,e=>{let u=e.toString("utf8").trim();if(u.startsWith("shallow")){let t=u.slice(-41).trim();40!==t.length&&f(new F(t)),a.push(t)}else if(u.startsWith("unshallow")){let t=u.slice(-41).trim();40!==t.length&&f(new F(t)),n.push(t)}else if(u.startsWith("ACK")){let[,t,e]=u.split(" ");s.push({oid:t,status:e}),e||(c=!0)}else u.startsWith("NAK")?(o=!0,c=!0):(c=!0,o=!0);c&&(t.error?f(t.error):l({shallows:a,unshallows:n,acks:s,nak:o,packfile:r,progress:i}))}).finally(()=>{c||(t.error?f(t.error):l({shallows:a,unshallows:n,acks:s,nak:o,packfile:r,progress:i}))})})}async function r_({fs:t,cache:e,http:r,onProgress:i,onMessage:a,onAuth:n,onAuthSuccess:s,onAuthFailure:o,gitdir:c,ref:l,remoteRef:f,remote:u,url:h,corsProxy:w,depth:m=null,since:p=null,exclude:g=[],relative:y=!1,tags:b=!1,singleBranch:$=!1,headers:_={},prune:v=!1,pruneTags:x=!1}){let E=l||await e6({fs:t,gitdir:c,test:!0}),k=await tm.get({fs:t,gitdir:c}),S=u||E&&await k.get(`branch.${E}.remote`)||"origin",j=h||await k.get(`remote.${S}.url`);if(void 0===j)throw new t8("remote OR url");let R=f||E&&await k.get(`branch.${E}.merge`)||l||"HEAD";void 0===w&&(w=await k.get("http.corsProxy"));let I=rl.getRemoteHelperFor({url:j}),O=await I.discover({http:r,onAuth:n,onAuthSuccess:s,onAuthFailure:o,corsProxy:w,service:"git-upload-pack",url:j,headers:_,protocolVersion:1}),P=O.auth,A=O.refs;if(0===A.size)return{defaultBranch:null,fetchHead:null,fetchHeadDescription:null};if(null!==m&&!O.capabilities.has("shallow"))throw new t9("shallow","depth");if(null!==p&&!O.capabilities.has("deepen-since"))throw new t9("deepen-since","since");if(g.length>0&&!O.capabilities.has("deepen-not"))throw new t9("deepen-not","exclude");if(!0===y&&!O.capabilities.has("deepen-relative"))throw new t9("deepen-relative","relative");let{oid:U,fullref:C}=tb.resolveAgainstMap({ref:R,map:A});for(let t of A.keys())t===C||"HEAD"===t||t.startsWith("refs/heads/")||b&&t.startsWith("refs/tags/")||A.delete(t);let B=rm([...O.capabilities],["multi_ack_detailed","no-done","side-band-64k","ofs-delta",`agent=${rp.agent}`]);y&&B.push("deepen-relative");let N=$?[U]:A.values(),D=$?[E]:await tb.listRefs({fs:t,gitdir:c,filepath:"refs"}),M=[];for(let r of D)try{r=await tb.expand({fs:t,gitdir:c,ref:r});let i=await tb.resolve({fs:t,gitdir:c,ref:r});await rw({fs:t,cache:e,gitdir:c,oid:i})&&M.push(i)}catch(t){}M=[...new Set(M)];let T=await ru.read({fs:t,gitdir:c}),H=function({capabilities:t=[],wants:e=[],haves:r=[],shallows:i=[],depth:a=null,since:n=null,exclude:s=[]}){let o=[];e=[...new Set(e)];let c=` ${t.join(" ")}`;for(let t of e)o.push(re.encode(`want ${t}${c}
// `)),c="";for(let t of i)o.push(re.encode(`shallow ${t}
// `));for(let t of(null!==a&&o.push(re.encode(`deepen ${a}
// `)),null!==n&&o.push(re.encode(`deepen-since ${Math.floor(n.valueOf()/1e3)}
// `)),s))o.push(re.encode(`deepen-not ${t}
// `));for(let t of(o.push(re.flush()),r))o.push(re.encode(`have ${t}
// `));return o.push(re.encode(`done
// `)),o}({capabilities:B,wants:N,haves:M,shallows:O.capabilities.has("shallow")?[...T]:[],depth:m,since:p,exclude:g}),z=d.from(await e5(H)),W=await I.connect({http:r,onProgress:i,corsProxy:w,service:"git-upload-pack",url:j,auth:P,body:[z],headers:_}),F=await r$(W.body);for(let r of(W.headers&&(F.headers=W.headers),F.shallows))if(!T.has(r))try{let{object:i}=await tW({fs:t,cache:e,gitdir:c,oid:r}),a=new el(i),n=await Promise.all(a.headers().parent.map(r=>rw({fs:t,cache:e,gitdir:c,oid:r})));0===n.length||n.every(t=>t)||T.add(r)}catch(t){T.add(r)}for(let t of F.unshallows)T.delete(t);if(await ru.write({fs:t,gitdir:c,oids:T}),$){let e=new Map([[C,U]]),r=new Map,i=10,a=C;for(;i--;){let t=O.symrefs.get(a);if(void 0===t)break;r.set(a,t),a=t}let n=A.get(a);n&&e.set(a,n);let{pruned:s}=await tb.updateRemoteRefs({fs:t,gitdir:c,remote:S,refs:e,symrefs:r,tags:b,prune:v});v&&(F.pruned=s)}else{let{pruned:e}=await tb.updateRemoteRefs({fs:t,gitdir:c,remote:S,refs:A,symrefs:O.symrefs,tags:b,prune:v,pruneTags:x});v&&(F.pruned=e)}if(F.HEAD=O.symrefs.get("HEAD"),void 0===F.HEAD){let{oid:t}=tb.resolveAgainstMap({ref:"HEAD",map:A});for(let[e,r]of A.entries())if("HEAD"!==e&&r===t){F.HEAD=e;break}}let G=C.startsWith("refs/tags")?"tag":"branch";F.FETCH_HEAD={oid:U,description:`${G} '${e4(C)}' of ${j}`},(i||a)&&e9(ry(F.progress),async t=>{if(a&&await a(t),i){let e=t.match(/([^:]*).*\((\d+?)\/(\d+?)\)/);e&&await i({phase:e[1].trim(),loaded:parseInt(e[2],10),total:parseInt(e[3],10)})}});let q=d.from(await e5(F.packfile));if(W.body.error)throw W.body.error;let L=q.slice(-20).toString("hex"),V={defaultBranch:F.HEAD,fetchHead:F.FETCH_HEAD.oid,fetchHeadDescription:F.FETCH_HEAD.description};if(F.headers&&(V.headers=F.headers),v&&(V.pruned=F.pruned),""!==L&&"5041434b0000000200000000"!==q.slice(0,12).toString("hex")){V.packfile=`objects/pack/pack-${L}.pack`;let r=J(c,V.packfile);await t.write(r,q);let a=await tD.fromPack({pack:q,getExternalRefDelta:r=>tW({fs:t,cache:e,gitdir:c,oid:r}),onProgress:i});await t.write(r.replace(/\.pack$/,".idx"),await a.toBuffer())}return V}async function rv({fs:t,bare:e=!1,dir:r,gitdir:i=e?r:J(r,".git"),defaultBranch:a="master"}){if(await t.exists(i+"/config"))return;let n=["hooks","info","objects/info","objects/pack","refs/heads","refs/tags"];for(let e of n=n.map(t=>i+"/"+t))await t.mkdir(e);await t.write(i+"/config",`[core]
// 	repositoryformatversion = 0
// 	filemode = false
// 	bare = ${e}
// `+(e?"":"	logallrefupdates = true\n")+"	symlinks = false\n	ignorecase = true\n"),await t.write(i+"/HEAD",`ref: refs/heads/${a}
// `)}async function rx({fs:t,cache:e,http:r,onProgress:i,onMessage:a,onAuth:n,onAuthSuccess:s,onAuthFailure:o,dir:c,gitdir:l,url:f,corsProxy:u,ref:d,remote:h,depth:w,since:m,exclude:p,relative:g,singleBranch:y,noCheckout:b,noTags:$,headers:_}){try{if(await rv({fs:t,gitdir:l}),await eV({fs:t,gitdir:l,remote:h,url:f,force:!1}),u){let e=await tm.get({fs:t,gitdir:l});await e.set("http.corsProxy",u),await tm.save({fs:t,gitdir:l,config:e})}let{defaultBranch:v,fetchHead:x}=await r_({fs:t,cache:e,http:r,onProgress:i,onMessage:a,onAuth:n,onAuthSuccess:s,onAuthFailure:o,gitdir:l,ref:d,remote:h,corsProxy:u,depth:w,since:m,exclude:p,relative:g,singleBranch:y,headers:_,tags:!$});if(null===x)return;d=(d=d||v).replace("refs/heads/",""),await e0({fs:t,cache:e,onProgress:i,dir:c,gitdir:l,ref:d,remote:h,noCheckout:b})}catch(e){throw await t.rmdir(l,{recursive:!0,maxRetries:10}).catch(()=>void 0),e}}async function rE({fs:t,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c=J(o,".git"),url:l,corsProxy:f,ref:u,remote:d="origin",depth:h,since:w,exclude:m=[],relative:p=!1,singleBranch:g=!1,noCheckout:y=!1,noTags:b=!1,headers:$={},cache:_={}}){try{return eE("fs",t),eE("http",e),eE("gitdir",c),y||eE("dir",o),eE("url",l),await rx({fs:new ex(t),cache:_,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c,url:l,corsProxy:f,ref:u,remote:d,depth:h,since:w,exclude:m,relative:p,singleBranch:g,noCheckout:y,noTags:b,headers:$})}catch(t){throw t.caller="git.clone",t}}async function rk({fs:t,onSign:e,dir:r,gitdir:i=J(r,".git"),message:a,author:n,committer:s,signingKey:o,dryRun:c=!1,noUpdateBranch:l=!1,ref:f,parent:u,tree:d,cache:h={}}){try{eE("fs",t),eE("message",a),o&&eE("onSign",e);let r=new ex(t),w=await eG({fs:r,gitdir:i,author:n});if(!w)throw new t2("author");let m=await eq({fs:r,gitdir:i,author:w,committer:s});if(!m)throw new t2("committer");return await eN({fs:r,cache:h,onSign:e,gitdir:i,message:a,author:w,committer:m,signingKey:o,dryRun:c,noUpdateBranch:l,ref:f,parent:u,tree:d})}catch(t){throw t.caller="git.commit",t}}async function rS({fs:t,dir:e,gitdir:r=J(e,".git"),fullname:i=!1,test:a=!1}){try{return eE("fs",t),eE("gitdir",r),await e6({fs:new ex(t),gitdir:r,fullname:i,test:a})}catch(t){throw t.caller="git.currentBranch",t}}async function rj({fs:t,gitdir:e,ref:r}){if(r=r.startsWith("refs/heads/")?r:`refs/heads/${r}`,!await tb.exists({fs:t,gitdir:e,ref:r}))throw new z(r);let i=await tb.expand({fs:t,gitdir:e,ref:r});if(i===await e6({fs:t,gitdir:e,fullname:!0})){let r=await tb.resolve({fs:t,gitdir:e,ref:i});await tb.writeRef({fs:t,gitdir:e,ref:"HEAD",value:r})}await tb.deleteRef({fs:t,gitdir:e,ref:i})}async function rR({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i}){try{return eE("fs",t),eE("ref",i),await rj({fs:new ex(t),gitdir:r,ref:i})}catch(t){throw t.caller="git.deleteBranch",t}}async function rI({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i}){try{eE("fs",t),eE("ref",i),await tb.deleteRef({fs:new ex(t),gitdir:r,ref:i})}catch(t){throw t.caller="git.deleteRef",t}}async function rO({fs:t,gitdir:e,remote:r}){let i=await tm.get({fs:t,gitdir:e});await i.deleteSection("remote",r),await tm.save({fs:t,gitdir:e,config:i})}async function rP({fs:t,dir:e,gitdir:r=J(e,".git"),remote:i}){try{return eE("fs",t),eE("remote",i),await rO({fs:new ex(t),gitdir:r,remote:i})}catch(t){throw t.caller="git.deleteRemote",t}}async function rA({fs:t,gitdir:e,ref:r}){r=r.startsWith("refs/tags/")?r:`refs/tags/${r}`,await tb.deleteRef({fs:t,gitdir:e,ref:r})}async function rU({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i}){try{return eE("fs",t),eE("ref",i),await rA({fs:new ex(t),gitdir:r,ref:i})}catch(t){throw t.caller="git.deleteTag",t}}async function rC({fs:t,gitdir:e,oid:r}){let i=r.slice(0,2);return(await t.readdir(`${e}/objects/${i}`)).map(t=>`${i}${t}`).filter(t=>t.startsWith(r))}async function rB({fs:t,cache:e,gitdir:r,oid:i,getExternalRefDelta:a}){let n=[],s=await t.readdir(J(r,"objects/pack"));for(let o of s=s.filter(t=>t.endsWith(".idx"))){let s=`${r}/objects/pack/${o}`,c=await tH({fs:t,cache:e,filename:s,getExternalRefDelta:a});if(c.error)throw new p(c.error);for(let t of c.offsets.keys())t.startsWith(i)&&n.push(t)}return n}async function rN({fs:t,cache:e,gitdir:r,oid:i}){let a=await rC({fs:t,gitdir:r,oid:i});for(let n of(await rB({fs:t,cache:e,gitdir:r,oid:i,getExternalRefDelta:i=>tW({fs:t,cache:e,gitdir:r,oid:i})})))-1===a.indexOf(n)&&a.push(n);if(1===a.length)return a[0];if(a.length>1)throw new tG("oids",i,a);throw new z(`an object matching "${i}"`)}async function rD({fs:t,dir:e,gitdir:r=J(e,".git"),oid:i,cache:a={}}){try{return eE("fs",t),eE("gitdir",r),eE("oid",i),await rN({fs:new ex(t),cache:a,gitdir:r,oid:i})}catch(t){throw t.caller="git.expandOid",t}}async function rM({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i}){try{return eE("fs",t),eE("gitdir",r),eE("ref",i),await tb.expand({fs:new ex(t),gitdir:r,ref:i})}catch(t){throw t.caller="git.expandRef",t}}async function rT({fs:t,cache:e,gitdir:r,oids:i}){let a={},n=i.length,s=i.map((t,e)=>({index:e,oid:t}));for(;s.length;){let i=new Set;for(let{oid:t,index:e}of s)a[t]||(a[t]=new Set),a[t].add(e),a[t].size===n&&i.add(t);if(i.size>0)return[...i];let o=new Map;for(let{oid:i,index:n}of s)try{let{object:s}=await tW({fs:t,cache:e,gitdir:r,oid:i}),{parent:c}=el.from(s).parseHeaders();for(let t of c)a[t]&&a[t].has(n)||o.set(t+":"+n,{oid:t,index:n})}catch(t){}s=Array.from(o.values())}return[]}let rH=/^.*(\r?\n|$)/gm;function rz({branches:t,contents:e}){let r=t[1],i=t[2],a=e[0],n=e[1],s=e[2],o=u(n.match(rH),a.match(rH),s.match(rH)),c="",l=!0;for(let t of o)t.ok&&(c+=t.ok.join("")),t.conflict&&(l=!1,c+=`${"<".repeat(7)} ${r}
// `+t.conflict.a.join("")+`${"=".repeat(7)}
// `+t.conflict.b.join("")+`${">".repeat(7)} ${i}
// `);return{cleanMerge:l,mergedText:c}}async function rW({fs:t,cache:e,dir:r,gitdir:i=J(r,".git"),index:a,ourOid:n,baseOid:s,theirOid:o,ourName:c="ours",baseName:l="base",theirName:f="theirs",dryRun:u=!1,abortOnConflict:d=!0,mergeDriver:h}){let w=ed({ref:n}),m=ed({ref:s}),p=ed({ref:o}),g=[],y=[],b=[],$=[],_=await eg({fs:t,cache:e,dir:r,gitdir:i,trees:[w,m,p],map:async function(e,[r,n,s]){let o=B(e),u=await ek(r,n),w=await ek(s,n);switch(`${u}-${w}`){case"false-false":return{mode:await n.mode(),path:o,oid:await n.oid(),type:await n.type()};case"false-true":return s?{mode:await s.mode(),path:o,oid:await s.oid(),type:await s.type()}:void 0;case"true-false":return r?{mode:await r.mode(),path:o,oid:await r.oid(),type:await r.type()}:void 0;case"true-true":if(r&&n&&s&&await r.type()==="blob"&&await n.type()==="blob"&&await s.type()==="blob")return rF({fs:t,gitdir:i,path:o,ours:r,base:n,theirs:s,ourName:c,baseName:l,theirName:f,mergeDriver:h}).then(async t=>{if(t.cleanMerge)d||a.insert({filepath:e,oid:t.mergeResult.oid,stage:0});else if(g.push(e),y.push(e),!d){let t=await n.oid(),i=await r.oid(),o=await s.oid();a.delete({filepath:e}),a.insert({filepath:e,oid:t,stage:1}),a.insert({filepath:e,oid:i,stage:2}),a.insert({filepath:e,oid:o,stage:3})}return t.mergeResult});if(n&&!r&&s&&await n.type()==="blob"&&await s.type()==="blob"){if(g.push(e),b.push(e),!d){let t=await n.oid(),r=await s.oid();a.delete({filepath:e}),a.insert({filepath:e,oid:t,stage:1}),a.insert({filepath:e,oid:r,stage:3})}return{mode:await s.mode(),oid:await s.oid(),type:"blob",path:o}}if(n&&r&&!s&&await n.type()==="blob"&&await r.type()==="blob"){if(g.push(e),$.push(e),!d){let t=await n.oid(),i=await r.oid();a.delete({filepath:e}),a.insert({filepath:e,oid:t,stage:1}),a.insert({filepath:e,oid:i,stage:2})}return{mode:await r.mode(),oid:await r.oid(),type:"blob",path:o}}if(n&&!r&&!s&&await n.type()==="blob")return;throw new t0}},reduce:0!==g.length&&(!r||d)?void 0:async(e,r)=>{let a=r.filter(Boolean);if(e&&(!e||"tree"!==e.type||0!==a.length)){if(a.length>0){let r=new tE(a).toObject(),n=await eA({fs:t,gitdir:i,type:"tree",object:r,dryRun:u});e.oid=n}return e}}});return 0!==g.length?(r&&!d&&await eg({fs:t,cache:e,dir:r,gitdir:i,trees:[ed({ref:_.oid})],map:async function(e,[i]){let a=`${r}/${e}`;if(await i.type()==="blob"){let e=await i.mode(),r=new TextDecoder().decode(await i.content());await t.write(a,r,{mode:e})}return!0}}),new t1(g,y,b,$)):_.oid}async function rF({fs:t,gitdir:e,path:r,ours:i,base:a,theirs:n,ourName:s,theirName:o,baseName:c,dryRun:l,mergeDriver:f=rz}){let u="blob",h=await a.mode()===await i.mode()?await n.mode():await i.mode();if(await i.oid()===await n.oid())return{cleanMerge:!0,mergeResult:{mode:h,path:r,oid:await i.oid(),type:u}};if(await i.oid()===await a.oid())return{cleanMerge:!0,mergeResult:{mode:h,path:r,oid:await n.oid(),type:u}};if(await n.oid()===await a.oid())return{cleanMerge:!0,mergeResult:{mode:h,path:r,oid:await i.oid(),type:u}};let w=d.from(await i.content()).toString("utf8"),m=d.from(await a.content()).toString("utf8"),p=d.from(await n.content()).toString("utf8"),{mergedText:g,cleanMerge:y}=await f({branches:[c,s,o],contents:[m,w,p],path:r});return{cleanMerge:y,mergeResult:{mode:h,path:r,oid:await eA({fs:t,gitdir:e,type:"blob",object:d.from(g,"utf8"),dryRun:l}),type:u}}}async function rG({fs:t,cache:e,dir:r,gitdir:i,ours:a,theirs:n,fastForward:s=!0,fastForwardOnly:o=!1,dryRun:c=!1,noUpdateBranch:l=!1,abortOnConflict:f=!0,message:u,author:d,committer:h,signingKey:w,onSign:m,mergeDriver:p}){void 0===a&&(a=await e6({fs:t,gitdir:i,fullname:!0})),a=await tb.expand({fs:t,gitdir:i,ref:a}),n=await tb.expand({fs:t,gitdir:i,ref:n});let g=await tb.resolve({fs:t,gitdir:i,ref:a}),y=await tb.resolve({fs:t,gitdir:i,ref:n}),b=await rT({fs:t,cache:e,gitdir:i,oids:[g,y]});if(1!==b.length)throw new t0;let $=b[0];if($===y)return{oid:g,alreadyMerged:!0};if(s&&$===g)return c||l||await tb.writeRef({fs:t,gitdir:i,ref:a,value:y}),{oid:y,fastForward:!0};{if(o)throw new tK;let s=await C.acquire({fs:t,gitdir:i,cache:e,allowUnmerged:!1},async s=>rW({fs:t,cache:e,dir:r,gitdir:i,index:s,ourOid:g,theirOid:y,baseOid:$,ourName:e4(a),baseName:"base",theirName:e4(n),dryRun:c,abortOnConflict:f,mergeDriver:p}));if(s instanceof t1)throw s;return u||(u=`Merge branch '${e4(n)}' into ${e4(a)}`),{oid:await eN({fs:t,cache:e,gitdir:i,message:u,ref:a,tree:s,parent:[g,y],author:d,committer:h,signingKey:w,onSign:m,dryRun:c,noUpdateBranch:l}),tree:s,mergeCommit:!0}}}async function rq({fs:t,cache:e,http:r,onProgress:i,onMessage:a,onAuth:n,onAuthSuccess:s,onAuthFailure:o,dir:c,gitdir:l,ref:f,url:u,remote:d,remoteRef:h,prune:w,pruneTags:m,fastForward:p,fastForwardOnly:g,corsProxy:y,singleBranch:b,headers:$,author:_,committer:v,signingKey:x}){try{if(!f){let e=await e6({fs:t,gitdir:l});if(!e)throw new t8("ref");f=e}let{fetchHead:E,fetchHeadDescription:k}=await r_({fs:t,cache:e,http:r,onProgress:i,onMessage:a,onAuth:n,onAuthSuccess:s,onAuthFailure:o,gitdir:l,corsProxy:y,ref:f,url:u,remote:d,remoteRef:h,singleBranch:b,headers:$,prune:w,pruneTags:m});await rG({fs:t,cache:e,gitdir:l,ours:f,theirs:E,fastForward:p,fastForwardOnly:g,message:`Merge ${k}`,author:_,committer:v,signingKey:x,dryRun:!1,noUpdateBranch:!1}),await e0({fs:t,cache:e,onProgress:i,dir:c,gitdir:l,ref:f,remote:d,noCheckout:!1})}catch(t){throw t.caller="git.pull",t}}async function rL({fs:t,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c=J(o,".git"),ref:l,url:f,remote:u,remoteRef:d,corsProxy:h,singleBranch:w,headers:m={},cache:p={}}){try{eE("fs",t),eE("http",e),eE("gitdir",c);let g={name:"",email:"",timestamp:Date.now(),timezoneOffset:0};return await rq({fs:new ex(t),cache:p,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c,ref:l,url:f,remote:u,remoteRef:d,fastForwardOnly:!0,corsProxy:h,singleBranch:w,headers:m,author:g,committer:g})}catch(t){throw t.caller="git.fastForward",t}}async function rV({fs:t,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c=J(o,".git"),ref:l,remote:f,remoteRef:u,url:d,corsProxy:h,depth:w=null,since:m=null,exclude:p=[],relative:g=!1,tags:y=!1,singleBranch:b=!1,headers:$={},prune:_=!1,pruneTags:v=!1,cache:x={}}){try{return eE("fs",t),eE("http",e),eE("gitdir",c),await r_({fs:new ex(t),cache:x,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,gitdir:c,ref:l,remote:f,remoteRef:u,url:d,corsProxy:h,depth:w,since:m,exclude:p,relative:g,tags:y,singleBranch:b,headers:$,prune:_,pruneTags:v})}catch(t){throw t.caller="git.fetch",t}}async function rK({fs:t,dir:e,gitdir:r=J(e,".git"),oids:i,cache:a={}}){try{return eE("fs",t),eE("gitdir",r),eE("oids",i),await rT({fs:new ex(t),cache:a,gitdir:r,oids:i})}catch(t){throw t.caller="git.findMergeBase",t}}async function rZ({fs:t,filepath:e}){if(await t.exists(J(e,".git")))return e;{let r=N(e);if(r===e)throw new z(`git root for ${e}`);return rZ({fs:t,filepath:r})}}async function rY({fs:t,filepath:e}){try{return eE("fs",t),eE("filepath",e),await rZ({fs:new ex(t),filepath:e})}catch(t){throw t.caller="git.findRoot",t}}async function rJ({fs:t,dir:e,gitdir:r=J(e,".git"),path:i}){try{return eE("fs",t),eE("gitdir",r),eE("path",i),await eF({fs:new ex(t),gitdir:r,path:i})}catch(t){throw t.caller="git.getConfig",t}}async function rX({fs:t,gitdir:e,path:r}){return(await tm.get({fs:t,gitdir:e})).getall(r)}async function rQ({fs:t,dir:e,gitdir:r=J(e,".git"),path:i}){try{return eE("fs",t),eE("gitdir",r),eE("path",i),await rX({fs:new ex(t),gitdir:r,path:i})}catch(t){throw t.caller="git.getConfigAll",t}}async function r0({http:t,onAuth:e,onAuthSuccess:r,onAuthFailure:i,corsProxy:a,url:n,headers:s={},forPush:o=!1}){try{eE("http",t),eE("url",n);let c=rl.getRemoteHelperFor({url:n}),l=await c.discover({http:t,onAuth:e,onAuthSuccess:r,onAuthFailure:i,corsProxy:a,service:o?"git-receive-pack":"git-upload-pack",url:n,headers:s,protocolVersion:1}),f={capabilities:[...l.capabilities]};for(let[t,e]of l.refs){let r=t.split("/"),i=r.pop(),a=f;for(let t of r)a[t]=a[t]||{},a=a[t];a[i]=e}for(let[t,e]of l.symrefs){let r=t.split("/"),i=r.pop(),a=f;for(let t of r)a[t]=a[t]||{},a=a[t];a[i]=e}return f}catch(t){throw t.caller="git.getRemoteInfo",t}}function r1(t,e,r,i){let a=[];for(let[n,s]of t.refs){if(e&&!n.startsWith(e))continue;if(n.endsWith("^{}")){if(i){let t=n.replace("^{}",""),e=a[a.length-1],r=e.ref===t?e:a.find(e=>e.ref===t);if(void 0===r)throw Error("I did not expect this to happen");r.peeled=s}continue}let o={ref:n,oid:s};r&&t.symrefs.has(n)&&(o.target=t.symrefs.get(n)),a.push(o)}return a}async function r2({http:t,onAuth:e,onAuthSuccess:r,onAuthFailure:i,corsProxy:a,url:n,headers:s={},forPush:o=!1,protocolVersion:c=2}){try{eE("http",t),eE("url",n);let l=rl.getRemoteHelperFor({url:n}),f=await l.discover({http:t,onAuth:e,onAuthSuccess:r,onAuthFailure:i,corsProxy:a,service:o?"git-receive-pack":"git-upload-pack",url:n,headers:s,protocolVersion:c});if(2===f.protocolVersion)return{protocolVersion:f.protocolVersion,capabilities:f.capabilities2};let u={};for(let t of f.capabilities){let[e,r]=t.split("=");r?u[e]=r:u[e]=!0}return{protocolVersion:1,capabilities:u,refs:r1(f,void 0,!0,!0)}}catch(t){throw t.caller="git.getRemoteInfo2",t}}async function r8({type:t,object:e,format:r="content",oid:i}){return"deflated"!==r&&("wrapped"!==r&&(e=tk.wrap({type:t,object:e})),i=await k(e)),{oid:i,object:e}}async function r4({object:t}){try{eE("object",t),t="string"==typeof t?d.from(t,"utf8"):d.from(t);let{oid:e,object:r}=await r8({type:"blob",format:"content",object:t});return{oid:e,type:"blob",object:new Uint8Array(r),format:"wrapped"}}catch(t){throw t.caller="git.hashBlob",t}}async function r6({fs:t,cache:e,onProgress:r,dir:i,gitdir:a,filepath:n}){try{n=J(i,n);let s=await t.read(n),o=await tD.fromPack({pack:s,getExternalRefDelta:r=>tW({fs:t,cache:e,gitdir:a,oid:r}),onProgress:r});return await t.write(n.replace(/\.pack$/,".idx"),await o.toBuffer()),{oids:[...o.hashes]}}catch(t){throw t.caller="git.indexPack",t}}async function r3({fs:t,onProgress:e,dir:r,gitdir:i=J(r,".git"),filepath:a,cache:n={}}){try{return eE("fs",t),eE("dir",r),eE("gitdir",r),eE("filepath",a),await r6({fs:new ex(t),cache:n,onProgress:e,dir:r,gitdir:i,filepath:a})}catch(t){throw t.caller="git.indexPack",t}}async function r9({fs:t,bare:e=!1,dir:r,gitdir:i=e?r:J(r,".git"),defaultBranch:a="master"}){try{return eE("fs",t),eE("gitdir",i),e||eE("dir",r),await rv({fs:new ex(t),bare:e,dir:r,gitdir:i,defaultBranch:a})}catch(t){throw t.caller="git.init",t}}async function r5({fs:t,cache:e,gitdir:r,oid:i,ancestor:a,depth:n}){let s=await ru.read({fs:t,gitdir:r});if(!i)throw new t8("oid");if(!a)throw new t8("ancestor");if(i===a)return!1;let o=[i],c=new Set,l=0;for(;o.length;){if(l++===n)throw new tQ(n);let i=o.shift(),{type:f,object:u}=await tW({fs:t,cache:e,gitdir:r,oid:i});if("commit"!==f)throw new W(i,f,"commit");let d=el.from(u).parse();for(let t of d.parent)if(t===a)return!0;if(!s.has(i))for(let t of d.parent)c.has(t)||(o.push(t),c.add(t))}return!1}async function r7({fs:t,dir:e,gitdir:r=J(e,".git"),oid:i,ancestor:a,depth:n=-1,cache:s={}}){try{return eE("fs",t),eE("gitdir",r),eE("oid",i),eE("ancestor",a),await r5({fs:new ex(t),cache:s,gitdir:r,oid:i,ancestor:a,depth:n})}catch(t){throw t.caller="git.isDescendent",t}}async function it({fs:t,dir:e,gitdir:r=J(e,".git"),filepath:i}){try{return eE("fs",t),eE("dir",e),eE("gitdir",r),eE("filepath",i),ej.isIgnored({fs:new ex(t),dir:e,gitdir:r,filepath:i})}catch(t){throw t.caller="git.isIgnored",t}}async function ie({fs:t,dir:e,gitdir:r=J(e,".git"),remote:i}){try{return eE("fs",t),eE("gitdir",r),tb.listBranches({fs:new ex(t),gitdir:r,remote:i})}catch(t){throw t.caller="git.listBranches",t}}async function ir({fs:t,gitdir:e,ref:r,cache:i}){if(!r)return C.acquire({fs:t,gitdir:e,cache:i},async function(t){return t.entries.map(t=>t.path)});{let a=await tb.resolve({gitdir:e,fs:t,ref:r}),n=[];return await ii({fs:t,cache:i,gitdir:e,oid:a,filenames:n,prefix:""}),n}}async function ii({fs:t,cache:e,gitdir:r,oid:i,filenames:a,prefix:n}){let{tree:s}=await eH({fs:t,cache:e,gitdir:r,oid:i});for(let i of s)"tree"===i.type?await ii({fs:t,cache:e,gitdir:r,oid:i.oid,filenames:a,prefix:J(n,i.path)}):a.push(J(n,i.path))}async function ia({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i,cache:a={}}){try{return eE("fs",t),eE("gitdir",r),await ir({fs:new ex(t),cache:a,gitdir:r,ref:i})}catch(t){throw t.caller="git.listFiles",t}}async function is({fs:t,cache:e,gitdir:r,ref:i}){let a;try{a=await tb.resolve({gitdir:r,fs:t,ref:i})}catch(t){if(t instanceof z)return[]}return(await eH({fs:t,cache:e,gitdir:r,oid:a})).tree.map(t=>({target:t.path,note:t.oid}))}async function io({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i="refs/notes/commits",cache:a={}}){try{return eE("fs",t),eE("gitdir",r),eE("ref",i),await is({fs:new ex(t),cache:a,gitdir:r,ref:i})}catch(t){throw t.caller="git.listNotes",t}}async function ic({fs:t,gitdir:e}){let r=await tm.get({fs:t,gitdir:e});return Promise.all((await r.getSubsections("remote")).map(async t=>{let e=await r.get(`remote.${t}.url`);return{remote:t,url:e}}))}async function il({fs:t,dir:e,gitdir:r=J(e,".git")}){try{return eE("fs",t),eE("gitdir",r),await ic({fs:new ex(t),gitdir:r})}catch(t){throw t.caller="git.listRemotes",t}}async function iu(t){let e;let r=re.streamReader(t),i=[];for(;!0!==(e=await r());){if(null===e)continue;let[t,r,...a]=(e=e.toString("utf8").replace(/\n$/,"")).split(" "),n={ref:r,oid:t};for(let t of a){let[e,r]=t.split(":");"symref-target"===e?n.target=r:"peeled"===e&&(n.peeled=r)}i.push(n)}return i}async function id({prefix:t,symrefs:e,peelTags:r}){let i=[];return i.push(re.encode("command=ls-refs\n")),i.push(re.encode(`agent=${rp.agent}
// `)),(r||e||t)&&i.push(re.delim()),r&&i.push(re.encode("peel")),e&&i.push(re.encode("symrefs")),t&&i.push(re.encode(`ref-prefix ${t}`)),i.push(re.flush()),i}async function ih({http:t,onAuth:e,onAuthSuccess:r,onAuthFailure:i,corsProxy:a,url:n,headers:s={},forPush:o=!1,protocolVersion:c=2,prefix:l,symrefs:f,peelTags:u}){try{eE("http",t),eE("url",n);let d=await rc.discover({http:t,onAuth:e,onAuthSuccess:r,onAuthFailure:i,corsProxy:a,service:o?"git-receive-pack":"git-upload-pack",url:n,headers:s,protocolVersion:c});if(1===d.protocolVersion)return r1(d,l,f,u);let h=await id({prefix:l,symrefs:f,peelTags:u}),w=await rc.connect({http:t,auth:d.auth,headers:s,corsProxy:a,service:o?"git-receive-pack":"git-upload-pack",url:n,body:h});return iu(w.body)}catch(t){throw t.caller="git.listServerRefs",t}}async function iw({fs:t,dir:e,gitdir:r=J(e,".git")}){try{return eE("fs",t),eE("gitdir",r),tb.listTags({fs:new ex(t),gitdir:r})}catch(t){throw t.caller="git.listTags",t}}async function im({fs:t,cache:e,gitdir:r,oid:i}){let{type:a,object:n}=await tW({fs:t,cache:e,gitdir:r,oid:i});if("tag"===a)return im({fs:t,cache:e,gitdir:r,oid:i=eo.from(n).parse().object});if("commit"!==a)throw new W(i,a,"commit");return{commit:el.from(n),oid:i}}async function ip({fs:t,cache:e,gitdir:r,oid:i}){let{commit:a,oid:n}=await im({fs:t,cache:e,gitdir:r,oid:i});return{oid:n,commit:a.parse(),payload:a.withoutSignature()}}async function ig({fs:t,cache:e,gitdir:r,oid:i,fileId:a}){let n;if("e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"===a)return;let s=await ef({fs:t,cache:e,gitdir:r,oid:i}),o=s.tree;return a===s.oid?n=s.path:Array.isArray(n=await iy({fs:t,cache:e,gitdir:r,tree:o,fileId:a,oid:i}))&&(0===n.length?n=void 0:1===n.length&&(n=n[0])),n}async function iy({fs:t,cache:e,gitdir:r,tree:i,fileId:a,oid:n,filepaths:s=[],parentPath:o=""}){let c=i.entries().map(function(i){let c;return i.oid===a?(c=J(o,i.path),s.push(c)):"tree"===i.type&&(c=tW({fs:t,cache:e,gitdir:r,oid:i.oid}).then(function({object:c}){return iy({fs:t,cache:e,gitdir:r,tree:tE.from(c),fileId:a,oid:n,filepaths:s,parentPath:J(o,i.path)})})),c});return await Promise.all(c),s}async function ib({fs:t,cache:e,gitdir:r,filepath:i,ref:a,depth:n,since:s,force:o,follow:c}){let l,f,u;let d=void 0===s?void 0:Math.floor(s.valueOf()/1e3),h=[],w=await ru.read({fs:t,gitdir:r}),m=await tb.resolve({fs:t,gitdir:r,ref:a}),p=[await ip({fs:t,cache:e,gitdir:r,oid:m})];function g(t){u&&i&&h.push(t)}for(;p.length>0;){let a=p.pop();if(void 0!==d&&a.commit.committer.timestamp<=d)break;if(i){let n;try{n=await eM({fs:t,cache:e,gitdir:r,oid:a.commit.tree,filepath:i}),f&&l!==n&&h.push(f),l=n,f=a,u=!0}catch(n){if(n instanceof z){let s=c&&l;if(s&&(s=await ig({fs:t,cache:e,gitdir:r,oid:a.commit.tree,fileId:l}))){if(Array.isArray(s)){if(f){let a=await ig({fs:t,cache:e,gitdir:r,oid:f.commit.tree,fileId:l});if(Array.isArray(a)){if(1===(s=s.filter(t=>-1===a.indexOf(t))).length)i=s=s[0],f&&h.push(f);else{s=!1,f&&h.push(f);break}}}}else i=s,f&&h.push(f)}if(!s){if(u&&l&&(h.push(f),!o))break;if(!o&&!c)throw n}f=a,u=!1}else throw n}}else h.push(a);if(void 0!==n&&h.length===n){g(a);break}if(!w.has(a.oid))for(let i of a.commit.parent){let a=await ip({fs:t,cache:e,gitdir:r,oid:i});p.map(t=>t.oid).includes(a.oid)||p.push(a)}0===p.length&&g(a),p.sort((t,e)=>{var r,i;return r=t.commit,i=e.commit,r.committer.timestamp-i.committer.timestamp})}return h}async function i$({fs:t,dir:e,gitdir:r=J(e,".git"),filepath:i,ref:a="HEAD",depth:n,since:s,force:o,follow:c,cache:l={}}){try{return eE("fs",t),eE("gitdir",r),eE("ref",a),await ib({fs:new ex(t),cache:l,gitdir:r,filepath:i,ref:a,depth:n,since:s,force:o,follow:c})}catch(t){throw t.caller="git.log",t}}async function i_({fs:t,onSign:e,dir:r,gitdir:i=J(r,".git"),ours:a,theirs:n,fastForward:s=!0,fastForwardOnly:o=!1,dryRun:c=!1,noUpdateBranch:l=!1,abortOnConflict:f=!0,message:u,author:d,committer:h,signingKey:w,cache:m={},mergeDriver:p}){try{eE("fs",t),w&&eE("onSign",e);let g=new ex(t),y=await eG({fs:g,gitdir:i,author:d});if(!y&&(!o||!s))throw new t2("author");let b=await eq({fs:g,gitdir:i,author:y,committer:h});if(!b&&(!o||!s))throw new t2("committer");return await rG({fs:g,cache:m,dir:r,gitdir:i,ours:a,theirs:n,fastForward:s,fastForwardOnly:o,dryRun:c,noUpdateBranch:l,abortOnConflict:f,message:u,author:y,committer:b,signingKey:w,onSign:e,mergeDriver:p})}catch(t){throw t.caller="git.merge",t}}let iv={commit:16,tree:32,blob:48,tag:64,ofs_delta:96,ref_delta:112};async function ix({fs:t,cache:e,dir:r,gitdir:i=J(r,".git"),oids:a}){let s=new n,o=[];function c(t,e){let r=d.from(t,e);o.push(r),s.update(r)}async function l({stype:t,object:e}){let r=iv[t],i=e.length,a=i>15?128:0,n=15&i;i>>>=4;let s=(a|r|n).toString(16);for(c(s,"hex");a;)c(rt(2,s=(a=i>127?128:0)|127&i),"hex"),i>>>=7;c(d.from(await eO(e)))}for(let r of(c("PACK"),c("00000002","hex"),c(rt(8,a.length),"hex"),a)){let{type:a,object:n}=await tW({fs:t,cache:e,gitdir:i,oid:r});await l({write:c,object:n,stype:a})}let f=s.digest();return o.push(f),o}async function iE({fs:t,cache:e,gitdir:r,oids:i,write:a}){let n=await ix({fs:t,cache:e,gitdir:r,oids:i}),s=d.from(await e5(n)),o=s.slice(-20).toString("hex"),c=`pack-${o}.pack`;return a?(await t.write(J(r,`objects/pack/${c}`),s),{filename:c}):{filename:c,packfile:new Uint8Array(s)}}async function ik({fs:t,dir:e,gitdir:r=J(e,".git"),oids:i,write:a=!1,cache:n={}}){try{return eE("fs",t),eE("gitdir",r),eE("oids",i),await iE({fs:new ex(t),cache:n,gitdir:r,oids:i,write:a})}catch(t){throw t.caller="git.packObjects",t}}async function iS({fs:t,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c=J(o,".git"),ref:l,url:f,remote:u,remoteRef:d,prune:h=!1,pruneTags:w=!1,fastForward:m=!0,fastForwardOnly:p=!1,corsProxy:g,singleBranch:y,headers:b={},author:$,committer:_,signingKey:v,cache:x={}}){try{eE("fs",t),eE("gitdir",c);let E=new ex(t),k=await eG({fs:E,gitdir:c,author:$});if(!k)throw new t2("author");let S=await eq({fs:E,gitdir:c,author:k,committer:_});if(!S)throw new t2("committer");return await rq({fs:E,cache:x,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c,ref:l,url:f,remote:u,remoteRef:d,fastForward:m,fastForwardOnly:p,corsProxy:g,singleBranch:y,headers:b,author:k,committer:S,signingKey:v,prune:h,pruneTags:w})}catch(t){throw t.caller="git.pull",t}}async function ij({fs:t,cache:e,dir:r,gitdir:i=J(r,".git"),start:a,finish:n}){let s=await ru.read({fs:t,gitdir:i}),o=new Set,c=new Set;for(let e of a)o.add(await tb.resolve({fs:t,gitdir:i,ref:e}));for(let e of n)try{let r=await tb.resolve({fs:t,gitdir:i,ref:e});c.add(r)}catch(t){}let l=new Set;async function f(r){l.add(r);let{type:a,object:n}=await tW({fs:t,cache:e,gitdir:i,oid:r});if("tag"===a)return f(eo.from(n).headers().object);if("commit"!==a)throw new W(r,a,"commit");if(!s.has(r))for(r of el.from(n).headers().parent)c.has(r)||l.has(r)||await f(r)}for(let t of o)await f(t);return l}async function iR({fs:t,cache:e,dir:r,gitdir:i=J(r,".git"),oids:a}){let n=new Set;async function s(r){if(n.has(r))return;n.add(r);let{type:a,object:o}=await tW({fs:t,cache:e,gitdir:i,oid:r});if("tag"===a){let t=eo.from(o).headers().object;await s(t)}else if("commit"===a){let t=el.from(o).headers().tree;await s(t)}else if("tree"===a)for(let t of tE.from(o))"blob"===t.type&&n.add(t.oid),"tree"===t.type&&await s(t.oid)}for(let t of a)await s(t);return n}async function iI(t){let e={},r="",i=re.streamReader(t),a=await i();for(;!0!==a;)null!==a&&(r+=a.toString("utf8")+"\n"),a=await i();let n=r.toString("utf8").split("\n");if(!(a=n.shift()).startsWith("unpack "))throw new t6('unpack ok" or "unpack [error message]',a);for(let t of(e.ok="unpack ok"===a,e.ok||(e.error=a.slice(7)),e.refs={},n)){if(""===t.trim())continue;let r=t.slice(0,2),i=t.slice(3),a=i.indexOf(" ");-1===a&&(a=i.length);let n=i.slice(0,a),s=i.slice(a+1);e.refs[n]={ok:"ok"===r,error:s}}return e}async function iO({capabilities:t=[],triplets:e=[]}){let r=[],i=`\0 ${t.join(" ")}`;for(let t of e)r.push(re.encode(`${t.oldoid} ${t.oid} ${t.fullRef}${i}
// `)),i="";return r.push(re.flush()),r}async function iP({fs:t,cache:e,http:r,onProgress:i,onMessage:a,onAuth:n,onAuthSuccess:s,onAuthFailure:o,gitdir:c,ref:l,remoteRef:f,remote:u,url:d,force:h=!1,delete:w=!1,corsProxy:m,headers:p={}}){let g;let y=l||await e6({fs:t,gitdir:c});if(void 0===y)throw new t8("ref");let b=await tm.get({fs:t,gitdir:c});u=u||await b.get(`branch.${y}.pushRemote`)||await b.get("remote.pushDefault")||await b.get(`branch.${y}.remote`)||"origin";let $=d||await b.get(`remote.${u}.pushurl`)||await b.get(`remote.${u}.url`);if(void 0===$)throw new t8("remote OR url");let _=f||await b.get(`branch.${y}.merge`);if(void 0===$)throw new t8("remoteRef");void 0===m&&(m=await b.get("http.corsProxy"));let v=await tb.expand({fs:t,gitdir:c,ref:y}),x=w?"0000000000000000000000000000000000000000":await tb.resolve({fs:t,gitdir:c,ref:v}),E=rl.getRemoteHelperFor({url:$}),k=await E.discover({http:r,onAuth:n,onAuthSuccess:s,onAuthFailure:o,corsProxy:m,service:"git-receive-pack",url:$,headers:p,protocolVersion:1}),S=k.auth;if(_)try{g=await tb.expandAgainstMap({ref:_,map:k.refs})}catch(t){if(t instanceof z)g=_.startsWith("refs/")?_:`refs/heads/${_}`;else throw t}else g=v;let j=k.refs.get(g)||"0000000000000000000000000000000000000000",R=!k.capabilities.has("no-thin"),I=new Set;if(!w){let r=[...k.refs.values()],i=new Set;if("0000000000000000000000000000000000000000"!==j){let a=await rT({fs:t,cache:e,gitdir:c,oids:[x,j]});for(let t of a)r.push(t);R&&(i=await iR({fs:t,cache:e,gitdir:c,oids:a}))}if(!r.includes(x)){let i=await ij({fs:t,cache:e,gitdir:c,start:[x],finish:r});I=await iR({fs:t,cache:e,gitdir:c,oids:i})}if(R){try{let r=await tb.resolve({fs:t,gitdir:c,ref:`refs/remotes/${u}/HEAD`,depth:2}),{oid:a}=await tb.resolveAgainstMap({ref:r.replace(`refs/remotes/${u}/`,""),fullref:r,map:k.refs});for(let r of(await iR({fs:t,cache:e,gitdir:c,oids:[a]})))i.add(r)}catch(t){}for(let t of i)I.delete(t)}if(x===j&&(h=!0),!h){if(v.startsWith("refs/tags")&&"0000000000000000000000000000000000000000"!==j)throw new t3("tag-exists");if("0000000000000000000000000000000000000000"!==x&&"0000000000000000000000000000000000000000"!==j&&!await r5({fs:t,cache:e,gitdir:c,oid:x,ancestor:j,depth:-1}))throw new t3("not-fast-forward")}}let O=rm([...k.capabilities],["report-status","side-band-64k",`agent=${rp.agent}`]),P=await iO({capabilities:O,triplets:[{oldoid:j,oid:x,fullRef:g}]}),A=w?[]:await ix({fs:t,cache:e,gitdir:c,oids:[...I]}),U=await E.connect({http:r,onProgress:i,corsProxy:m,service:"git-receive-pack",url:$,auth:S,headers:p,body:[...P,...A]}),{packfile:C,progress:B}=await rb.demux(U.body);a&&e9(ry(B),async t=>{await a(t)});let N=await iI(C);if(U.headers&&(N.headers=U.headers),u&&N.ok&&N.refs[g].ok){let e=`refs/remotes/${u}/${g.replace("refs/heads","")}`;w?await tb.deleteRef({fs:t,gitdir:c,ref:e}):await tb.writeRef({fs:t,gitdir:c,ref:e,value:x})}if(N.ok&&Object.values(N.refs).every(t=>t.ok))return N;throw new tZ(Object.entries(N.refs).filter(([t,e])=>!e.ok).map(([t,e])=>`
//   - ${t}: ${e.error}`).join(""),N)}async function iA({fs:t,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,dir:o,gitdir:c=J(o,".git"),ref:l,remoteRef:f,remote:u="origin",url:d,force:h=!1,delete:w=!1,corsProxy:m,headers:p={},cache:g={}}){try{return eE("fs",t),eE("http",e),eE("gitdir",c),await iP({fs:new ex(t),cache:g,http:e,onProgress:r,onMessage:i,onAuth:a,onAuthSuccess:n,onAuthFailure:s,gitdir:c,ref:l,remoteRef:f,remote:u,url:d,force:h,delete:w,corsProxy:m,headers:p})}catch(t){throw t.caller="git.push",t}}async function iU({fs:t,cache:e,gitdir:r,oid:i}){let{type:a,object:n}=await tW({fs:t,cache:e,gitdir:r,oid:i});if("tag"===a)return iU({fs:t,cache:e,gitdir:r,oid:i=eo.from(n).parse().object});if("blob"!==a)throw new W(i,a,"blob");return{oid:i,blob:new Uint8Array(n)}}async function iC({fs:t,cache:e,gitdir:r,oid:i,filepath:a}){return void 0!==a&&(i=await eM({fs:t,cache:e,gitdir:r,oid:i,filepath:a})),await iU({fs:t,cache:e,gitdir:r,oid:i})}async function iB({fs:t,dir:e,gitdir:r=J(e,".git"),oid:i,filepath:a,cache:n={}}){try{return eE("fs",t),eE("gitdir",r),eE("oid",i),await iC({fs:new ex(t),cache:n,gitdir:r,oid:i,filepath:a})}catch(t){throw t.caller="git.readBlob",t}}async function iN({fs:t,dir:e,gitdir:r=J(e,".git"),oid:i,cache:a={}}){try{return eE("fs",t),eE("gitdir",r),eE("oid",i),await ip({fs:new ex(t),cache:a,gitdir:r,oid:i})}catch(t){throw t.caller="git.readCommit",t}}async function iD({fs:t,cache:e,gitdir:r,ref:i="refs/notes/commits",oid:a}){let n=await tb.resolve({gitdir:r,fs:t,ref:i}),{blob:s}=await iC({fs:t,cache:e,gitdir:r,oid:n,filepath:a});return s}async function iM({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i="refs/notes/commits",oid:a,cache:n={}}){try{return eE("fs",t),eE("gitdir",r),eE("ref",i),eE("oid",a),await iD({fs:new ex(t),cache:n,gitdir:r,ref:i,oid:a})}catch(t){throw t.caller="git.readNote",t}}async function iT({fs:t,dir:e,gitdir:r=J(e,".git"),oid:i,format:a="parsed",filepath:n,encoding:s,cache:o={}}){try{eE("fs",t),eE("gitdir",r),eE("oid",i);let e=new ex(t);void 0!==n&&(i=await eM({fs:e,cache:o,gitdir:r,oid:i,filepath:n}));let c=await tW({fs:e,cache:o,gitdir:r,oid:i,format:"parsed"===a?"content":a});if(c.oid=i,"parsed"===a)switch(c.format="parsed",c.type){case"commit":c.object=el.from(c.object).parse();break;case"tree":c.object=tE.from(c.object).entries();break;case"blob":s?c.object=c.object.toString(s):(c.object=new Uint8Array(c.object),c.format="content");break;case"tag":c.object=eo.from(c.object).parse();break;default:throw new W(c.oid,c.type,"blob|commit|tag|tree")}else("deflated"===c.format||"wrapped"===c.format)&&(c.type=c.format);return c}catch(t){throw t.caller="git.readObject",t}}async function iH({fs:t,cache:e,gitdir:r,oid:i}){let{type:a,object:n}=await tW({fs:t,cache:e,gitdir:r,oid:i,format:"content"});if("tag"!==a)throw new W(i,a,"tag");let s=eo.from(n);return{oid:i,tag:s.parse(),payload:s.payload()}}async function iz({fs:t,dir:e,gitdir:r=J(e,".git"),oid:i,cache:a={}}){try{return eE("fs",t),eE("gitdir",r),eE("oid",i),await iH({fs:new ex(t),cache:a,gitdir:r,oid:i})}catch(t){throw t.caller="git.readTag",t}}async function iW({fs:t,dir:e,gitdir:r=J(e,".git"),oid:i,filepath:a,cache:n={}}){try{return eE("fs",t),eE("gitdir",r),eE("oid",i),await eH({fs:new ex(t),cache:n,gitdir:r,oid:i,filepath:a})}catch(t){throw t.caller="git.readTree",t}}async function iF({fs:t,dir:e,gitdir:r=J(e,".git"),filepath:i,cache:a={}}){try{eE("fs",t),eE("gitdir",r),eE("filepath",i),await C.acquire({fs:new ex(t),gitdir:r,cache:a},async function(t){t.delete({filepath:i})})}catch(t){throw t.caller="git.remove",t}}async function iG({fs:t,cache:e,onSign:r,gitdir:i,ref:a="refs/notes/commits",oid:n,author:s,committer:o,signingKey:c}){let l;try{l=await tb.resolve({gitdir:i,fs:t,ref:a})}catch(t){if(!(t instanceof z))throw t}let f=(await eH({fs:t,gitdir:i,oid:l||"4b825dc642cb6eb9a060e54bf8d69288fbee4904"})).tree;f=f.filter(t=>t.path!==n);let u=await ez({fs:t,gitdir:i,tree:f});return await eN({fs:t,cache:e,onSign:r,gitdir:i,ref:a,tree:u,parent:l&&[l],message:`Note removed by 'isomorphic-git removeNote'
// `,author:s,committer:o,signingKey:c})}async function iq({fs:t,onSign:e,dir:r,gitdir:i=J(r,".git"),ref:a="refs/notes/commits",oid:n,author:s,committer:o,signingKey:c,cache:l={}}){try{eE("fs",t),eE("gitdir",i),eE("oid",n);let r=new ex(t),f=await eG({fs:r,gitdir:i,author:s});if(!f)throw new t2("author");let u=await eq({fs:r,gitdir:i,author:f,committer:o});if(!u)throw new t2("committer");return await iG({fs:r,cache:l,onSign:e,gitdir:i,ref:a,oid:n,author:f,committer:u,signingKey:c})}catch(t){throw t.caller="git.removeNote",t}}async function iL({fs:t,gitdir:e,oldref:r,ref:i,checkout:a=!1}){if(i!==f.clean(i))throw new tX(i,f.clean(i));if(r!==f.clean(r))throw new tX(r,f.clean(r));let n=`refs/heads/${r}`,s=`refs/heads/${i}`;if(await tb.exists({fs:t,gitdir:e,ref:s}))throw new tF("branch",i,!1);let o=await tb.resolve({fs:t,gitdir:e,ref:n,depth:1});await tb.writeRef({fs:t,gitdir:e,ref:s,value:o}),await tb.deleteRef({fs:t,gitdir:e,ref:n});let c=await e6({fs:t,gitdir:e,fullname:!0})===n;(a||c)&&await tb.writeSymbolicRef({fs:t,gitdir:e,ref:"HEAD",value:s})}async function iV({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i,oldref:a,checkout:n=!1}){try{return eE("fs",t),eE("gitdir",r),eE("ref",i),eE("oldref",a),await iL({fs:new ex(t),gitdir:r,ref:i,oldref:a,checkout:n})}catch(t){throw t.caller="git.renameBranch",t}}async function iK({gitdir:t,type:e,object:r}){return k(tk.wrap({type:e,object:r}))}async function iZ({fs:t,dir:e,gitdir:r=J(e,".git"),filepath:i,ref:a,cache:n={}}){try{let s,o;eE("fs",t),eE("gitdir",r),eE("filepath",i);let c=new ex(t);try{s=await tb.resolve({fs:c,gitdir:r,ref:a||"HEAD"})}catch(t){if(a)throw t}if(s)try{s=await eM({fs:c,cache:n,gitdir:r,oid:s,filepath:i})}catch(t){s=null}let l={ctime:new Date(0),mtime:new Date(0),dev:0,ino:0,mode:0,uid:0,gid:0,size:0},f=e&&await c.read(J(e,i));f&&(o=await iK({gitdir:r,type:"blob",object:f}),s===o&&(l=await c.lstat(J(e,i)))),await C.acquire({fs:c,gitdir:r,cache:n},async function(t){t.delete({filepath:i}),s&&t.insert({filepath:i,stats:l,oid:s})})}catch(t){throw t.caller="git.reset",t}}async function iY({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i,depth:a}){try{return eE("fs",t),eE("gitdir",r),eE("ref",i),await tb.resolve({fs:new ex(t),gitdir:r,ref:i,depth:a})}catch(t){throw t.caller="git.resolveRef",t}}async function iJ({fs:t,dir:e,gitdir:r=J(e,".git"),path:i,value:a,append:n=!1}){try{eE("fs",t),eE("gitdir",r),eE("path",i);let e=new ex(t),s=await tm.get({fs:e,gitdir:r});n?await s.append(i,a):await s.set(i,a),await tm.save({fs:e,gitdir:r,config:s})}catch(t){throw t.caller="git.setConfig",t}}async function iX({fs:t,dir:e,gitdir:r=J(e,".git"),filepath:i,cache:a={}}){try{eE("fs",t),eE("gitdir",r),eE("filepath",i);let n=new ex(t);if(await ej.isIgnored({fs:n,gitdir:r,dir:e,filepath:i}))return"ignored";let s=await i0({fs:n,cache:a,gitdir:r}),o=await iQ({fs:n,cache:a,gitdir:r,tree:s,path:i}),c=await C.acquire({fs:n,gitdir:r,cache:a},async function(t){for(let e of t)if(e.path===i)return e;return null}),l=await n.lstat(J(e,i)),f=null!==o,u=null!==c,d=null!==l,h=async()=>{if(u&&!I(c,l))return c.oid;{let t=await n.read(J(e,i)),s=await iK({gitdir:r,type:"blob",object:t});return u&&c.oid===s&&-1!==l.size&&C.acquire({fs:n,gitdir:r,cache:a},async function(t){t.insert({filepath:i,stats:l,oid:s})}),s}};if(!f&&!d&&!u)return"absent";if(!f&&!d&&u)return"*absent";if(!f&&d&&!u)return"*added";if(!f&&d&&u)return await h()===c.oid?"added":"*added";if(f&&!d&&!u)return"deleted";if(f&&!d&&u)return c.oid,"*deleted";if(f&&d&&!u)return await h()===o?"*undeleted":"*undeletemodified";if(f&&d&&u){let t=await h();if(t===o)return t===c.oid?"unmodified":"*unmodified";return t===c.oid?"modified":"*modified"}}catch(t){throw t.caller="git.status",t}}async function iQ({fs:t,cache:e,gitdir:r,tree:i,path:a}){"string"==typeof a&&(a=a.split("/"));let n=a.shift();for(let s of i)if(s.path===n){if(0===a.length)return s.oid;let{type:i,object:n}=await tW({fs:t,cache:e,gitdir:r,oid:s.oid});if("tree"===i)return iQ({fs:t,cache:e,gitdir:r,tree:tE.from(n),path:a});if("blob"===i)throw new W(s.oid,i,"blob",a.join("/"))}return null}async function i0({fs:t,cache:e,gitdir:r}){let i;try{i=await tb.resolve({fs:t,gitdir:r,ref:"HEAD"})}catch(t){if(t instanceof z)return[]}let{tree:a}=await eH({fs:t,cache:e,gitdir:r,oid:i});return a}async function i1({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i="HEAD",filepaths:a=["."],filter:n,cache:s={},ignored:o=!1}){try{eE("fs",t),eE("gitdir",r),eE("ref",i);let c=new ex(t);return await eg({fs:c,cache:s,dir:e,gitdir:r,trees:[ed({ref:i}),ew(),H()],map:async function(t,[r,i,s]){let l;if(!r&&!s&&i&&!o&&await ej.isIgnored({fs:c,dir:e,filepath:t})||!a.some(e=>eQ(t,e)))return null;if(n&&!n(t))return;let[f,u,d]=await Promise.all([r&&r.type(),i&&i.type(),s&&s.type()]),h=[f,u,d].includes("blob");if(("tree"===f||"special"===f)&&!h)return;if("commit"===f)return null;if(("tree"===u||"special"===u)&&!h)return;if("commit"===d)return null;if(("tree"===d||"special"===d)&&!h)return;let w="blob"===f?await r.oid():void 0,m="blob"===d?await s.oid():void 0;"blob"!==f&&"blob"===u&&"blob"!==d?l="42":"blob"===u&&(l=await i.oid());let p=[void 0,w,l,m],g=p.map(t=>p.indexOf(t));return g.shift(),[t,...g]}})}catch(t){throw t.caller="git.statusMatrix",t}}async function i2({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i,object:a,force:n=!1}){try{eE("fs",t),eE("gitdir",r),eE("ref",i);let e=new ex(t);if(void 0===i)throw new t8("ref");i=i.startsWith("refs/tags/")?i:`refs/tags/${i}`;let s=await tb.resolve({fs:e,gitdir:r,ref:a||"HEAD"});if(!n&&await tb.exists({fs:e,gitdir:r,ref:i}))throw new tF("tag",i);await tb.writeRef({fs:e,gitdir:r,ref:i,value:s})}catch(t){throw t.caller="git.tag",t}}async function i8({fs:t,dir:e,gitdir:r=J(e,".git"),cache:i={},filepath:a,oid:n,mode:s,add:o,remove:c,force:l}){try{let f;eE("fs",t),eE("gitdir",r),eE("filepath",a);let u=new ex(t);if(c)return await C.acquire({fs:u,gitdir:r,cache:i},async function(t){let r;if(!l&&(r=await u.lstat(J(e,a)))){if(r.isDirectory())throw new tJ("directory");return}t.has({filepath:a})&&t.delete({filepath:a})});if(!n){if(!(f=await u.lstat(J(e,a))))throw new z(`file at "${a}" on disk and "remove" not set`);if(f.isDirectory())throw new tJ("directory")}return await C.acquire({fs:u,gitdir:r,cache:i},async function(t){if(!o&&!t.has({filepath:a}))throw new z(`file at "${a}" in index and "add" not set`);let i={ctime:new Date(0),mtime:new Date(0),dev:0,ino:0,mode:s,uid:0,gid:0,size:0};if(!n){let t=(i=f).isSymbolicLink()?await u.readlink(J(e,a)):await u.read(J(e,a));n=await eA({fs:u,gitdir:r,type:"blob",format:"content",object:t})}return t.insert({filepath:a,oid:n,stats:i}),n})}catch(t){throw t.caller="git.updateIndex",t}}function i4(){try{return rp.version}catch(t){throw t.caller="git.version",t}}async function i6({fs:t,dir:e,gitdir:r=J(e,".git"),trees:i,map:a,reduce:n,iterate:s,cache:o={}}){try{return eE("fs",t),eE("gitdir",r),eE("trees",i),await eg({fs:new ex(t),cache:o,dir:e,gitdir:r,trees:i,map:a,reduce:n,iterate:s})}catch(t){throw t.caller="git.walk",t}}async function i3({fs:t,dir:e,gitdir:r=J(e,".git"),blob:i}){try{return eE("fs",t),eE("gitdir",r),eE("blob",i),await eA({fs:new ex(t),gitdir:r,type:"blob",object:i,format:"content"})}catch(t){throw t.caller="git.writeBlob",t}}async function i9({fs:t,gitdir:e,commit:r}){let i=el.from(r).toObject();return await eA({fs:t,gitdir:e,type:"commit",object:i,format:"content"})}async function i5({fs:t,dir:e,gitdir:r=J(e,".git"),commit:i}){try{return eE("fs",t),eE("gitdir",r),eE("commit",i),await i9({fs:new ex(t),gitdir:r,commit:i})}catch(t){throw t.caller="git.writeCommit",t}}async function i7({fs:t,dir:e,gitdir:r=J(e,".git"),type:i,object:a,format:n="parsed",oid:s,encoding:o}){try{let e=new ex(t);if("parsed"===n){switch(i){case"commit":a=el.from(a).toObject();break;case"tree":a=tE.from(a).toObject();break;case"blob":a=d.from(a,o);break;case"tag":a=eo.from(a).toObject();break;default:throw new W(s||"",i,"blob|commit|tag|tree")}n="content"}return s=await eA({fs:e,gitdir:r,type:i,object:a,oid:s,format:n})}catch(t){throw t.caller="git.writeObject",t}}async function at({fs:t,dir:e,gitdir:r=J(e,".git"),ref:i,value:a,force:n=!1,symbolic:s=!1}){try{eE("fs",t),eE("gitdir",r),eE("ref",i),eE("value",a);let e=new ex(t);if(i!==f.clean(i))throw new tX(i,f.clean(i));if(!n&&await tb.exists({fs:e,gitdir:r,ref:i}))throw new tF("ref",i);s?await tb.writeSymbolicRef({fs:e,gitdir:r,ref:i,value:a}):(a=await tb.resolve({fs:e,gitdir:r,ref:a}),await tb.writeRef({fs:e,gitdir:r,ref:i,value:a}))}catch(t){throw t.caller="git.writeRef",t}}async function ae({fs:t,gitdir:e,tag:r}){let i=eo.from(r).toObject();return await eA({fs:t,gitdir:e,type:"tag",object:i,format:"content"})}async function ar({fs:t,dir:e,gitdir:r=J(e,".git"),tag:i}){try{return eE("fs",t),eE("gitdir",r),eE("tag",i),await ae({fs:new ex(t),gitdir:r,tag:i})}catch(t){throw t.caller="git.writeTag",t}}async function ai({fs:t,dir:e,gitdir:r=J(e,".git"),tree:i}){try{return eE("fs",t),eE("gitdir",r),eE("tree",i),await ez({fs:new ex(t),gitdir:r,tree:i})}catch(t){throw t.caller="git.writeTree",t}}e.default={Errors:ei,STAGE:H,TREE:ed,WORKDIR:ew,add:eC,abortMerge:eS,addNote:eL,addRemote:eK,annotatedTag:eY,branch:eX,checkout:e2,clone:rE,commit:rk,getConfig:rJ,getConfigAll:rQ,setConfig:iJ,currentBranch:rS,deleteBranch:rR,deleteRef:rI,deleteRemote:rP,deleteTag:rU,expandOid:rD,expandRef:rM,fastForward:rL,fetch:rV,findMergeBase:rK,findRoot:rY,getRemoteInfo:r0,getRemoteInfo2:r2,hashBlob:r4,indexPack:r3,init:r9,isDescendent:r7,isIgnored:it,listBranches:ie,listFiles:ia,listNotes:io,listRemotes:il,listServerRefs:ih,listTags:iw,log:i$,merge:i_,packObjects:ik,pull:iS,push:iA,readBlob:iB,readCommit:iN,readNote:iM,readObject:iT,readTag:iz,readTree:iW,remove:iF,removeNote:iq,renameBranch:iV,resetIndex:iZ,updateIndex:i8,resolveRef:iY,status:iX,statusMatrix:i1,tag:i2,version:i4,walk:i6,writeBlob:i3,writeCommit:i5,writeObject:i7,writeRef:at,writeTag:ar,writeTree:ai}}}]);