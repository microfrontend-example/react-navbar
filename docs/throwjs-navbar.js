/*! For license information please see throwjs-navbar.js.LICENSE.txt */
System.register(['react', 'react-dom', 'single-spa'], function (e, t) {
  var r = {},
    n = {},
    o = {};
  return (
    Object.defineProperty(r, '__esModule', { value: !0 }),
    {
      setters: [
        function (e) {
          Object.keys(e).forEach(function (t) {
            r[t] = e[t];
          });
        },
        function (e) {
          n.default = e.default;
        },
        function (e) {
          o.navigateToUrl = e.navigateToUrl;
        },
      ],
      execute: function () {
        e(
          (() => {
            var e = {
                767: (e) => {
                  'use strict';
                  var t = Object.getOwnPropertySymbols,
                    r = Object.prototype.hasOwnProperty,
                    n = Object.prototype.propertyIsEnumerable;
                  function o(e) {
                    if (null == e)
                      throw new TypeError(
                        'Object.assign cannot be called with null or undefined'
                      );
                    return Object(e);
                  }
                  e.exports = (function () {
                    try {
                      if (!Object.assign) return !1;
                      var e = new String('abc');
                      if (
                        ((e[5] = 'de'),
                        '5' === Object.getOwnPropertyNames(e)[0])
                      )
                        return !1;
                      for (var t = {}, r = 0; r < 10; r++)
                        t['_' + String.fromCharCode(r)] = r;
                      if (
                        '0123456789' !==
                        Object.getOwnPropertyNames(t)
                          .map(function (e) {
                            return t[e];
                          })
                          .join('')
                      )
                        return !1;
                      var n = {};
                      return (
                        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                          n[e] = e;
                        }),
                        'abcdefghijklmnopqrst' ===
                          Object.keys(Object.assign({}, n)).join('')
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? Object.assign
                    : function (e, a) {
                        for (
                          var i, c, u = o(e), s = 1;
                          s < arguments.length;
                          s++
                        ) {
                          for (var l in (i = Object(arguments[s])))
                            r.call(i, l) && (u[l] = i[l]);
                          if (t) {
                            c = t(i);
                            for (var p = 0; p < c.length; p++)
                              n.call(i, c[p]) && (u[c[p]] = i[c[p]]);
                          }
                        }
                        return u;
                      };
                },
                945: (e, t, r) => {
                  'use strict';
                  r(767);
                  var n = r(954),
                    o = 60103;
                  if ('function' == typeof Symbol && Symbol.for) {
                    var a = Symbol.for;
                    (o = a('react.element')), a('react.fragment');
                  }
                  var i =
                      n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                        .ReactCurrentOwner,
                    c = Object.prototype.hasOwnProperty,
                    u = { key: !0, ref: !0, __self: !0, __source: !0 };
                  function s(e, t, r) {
                    var n,
                      a = {},
                      s = null,
                      l = null;
                    for (n in (void 0 !== r && (s = '' + r),
                    void 0 !== t.key && (s = '' + t.key),
                    void 0 !== t.ref && (l = t.ref),
                    t))
                      c.call(t, n) && !u.hasOwnProperty(n) && (a[n] = t[n]);
                    if (e && e.defaultProps)
                      for (n in (t = e.defaultProps))
                        void 0 === a[n] && (a[n] = t[n]);
                    return {
                      $$typeof: o,
                      type: e,
                      key: s,
                      ref: l,
                      props: a,
                      _owner: i.current,
                    };
                  }
                  (t.jsx = s), (t.jsxs = s);
                },
                637: (e, t, r) => {
                  'use strict';
                  e.exports = r(945);
                },
                587: (e, t, r) => {
                  const n = r(838).R;
                  t.s = function (e) {
                    if ((e || (e = 1), !r.y.meta || !r.y.meta.url))
                      throw (
                        (console.error('__system_context__', r.y),
                        Error(
                          'systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided'
                        ))
                      );
                    r.p = n(r.y.meta.url, e);
                  };
                },
                838: (e, t, r) => {
                  t.R = function (e, t) {
                    var r = document.createElement('a');
                    r.href = e;
                    for (
                      var n =
                          '/' === r.pathname[0] ? r.pathname : '/' + r.pathname,
                        o = 0,
                        a = n.length;
                      o !== t && a >= 0;

                    )
                      '/' === n[--a] && o++;
                    if (o !== t)
                      throw Error(
                        'systemjs-webpack-interop: rootDirectoryLevel (' +
                          t +
                          ') is greater than the number of directories (' +
                          o +
                          ') in the URL path ' +
                          e
                      );
                    var i = n.slice(0, a + 1);
                    return r.protocol + '//' + r.host + i;
                  };
                  Number.isInteger;
                },
                954: (e) => {
                  'use strict';
                  e.exports = r;
                },
                493: (e) => {
                  'use strict';
                  e.exports = n;
                },
                645: (e) => {
                  'use strict';
                  e.exports = o;
                },
              },
              a = {};
            function i(t) {
              var r = a[t];
              if (void 0 !== r) return r.exports;
              var n = (a[t] = { exports: {} });
              return e[t](n, n.exports, i), n.exports;
            }
            (i.y = t),
              (i.d = (e, t) => {
                for (var r in t)
                  i.o(t, r) &&
                    !i.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (i.r = (e) => {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (i.p = '');
            var c = {};
            return (
              (0, i(587).s)(1),
              (() => {
                'use strict';
                i.r(c),
                  i.d(c, {
                    bootstrap: () => O,
                    mount: () => R,
                    unmount: () => E,
                  });
                var e = i(954),
                  t = i(493);
                function r(e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                      (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      r.push.apply(r, n);
                  }
                  return r;
                }
                function n(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? r(Object(n), !0).forEach(function (t) {
                          a(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : r(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                }
                function o(e) {
                  return (o =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        })(e);
                }
                function a(e, t, r) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = r),
                    e
                  );
                }
                function u(e) {
                  return (u =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        })(e);
                }
                function s(e, t) {
                  var r;
                  if (
                    'function' !=
                    typeof (r = t.domElement
                      ? function () {
                          return t.domElement;
                        }
                      : t.domElementGetter
                      ? t.domElementGetter
                      : e.domElementGetter
                      ? e.domElementGetter
                      : (function (e) {
                          var t = e.appName || e.name;
                          if (!t)
                            throw Error(
                              "single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application"
                            );
                          var r = 'single-spa-application:'.concat(t);
                          return function () {
                            var e = document.getElementById(r);
                            return (
                              e ||
                                (((e = document.createElement('div')).id = r),
                                document.body.appendChild(e)),
                              e
                            );
                          };
                        })(t))
                  )
                    throw Error(
                      "single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '"
                        .concat(t.name, "'. Expected a function, received ")
                        .concat(u(r))
                    );
                  return function () {
                    var e = r(t);
                    if (!(e instanceof HTMLElement))
                      throw Error(
                        "single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '"
                          .concat(t.name, "'. Expected HTMLElement, received ")
                          .concat(u(e))
                      );
                    return e;
                  };
                }
                var l = null;
                try {
                  l = require('react').createContext();
                } catch (r) {}
                var p = {
                  React: null,
                  ReactDOM: null,
                  rootComponent: null,
                  loadRootComponent: null,
                  renderType: null,
                  errorBoundary: null,
                  errorBoundaryClass: null,
                  domElementGetter: null,
                  parcelCanUpdate: !0,
                  suppressComponentDidCatchWarning: !1,
                  domElements: {},
                  renderResults: {},
                  updateResolves: {},
                };
                function m(e, t) {
                  return e.rootComponent
                    ? Promise.resolve()
                    : e.loadRootComponent(t).then(function (t) {
                        e.rootComponent = t;
                      });
                }
                function d(e, t) {
                  return new Promise(function (r, n) {
                    e.suppressComponentDidCatchWarning ||
                      !(function (e) {
                        if (
                          !(
                            e &&
                            'string' == typeof e.version &&
                            e.version.indexOf('.') >= 0
                          )
                        )
                          return !1;
                        var t = e.version.slice(0, e.version.indexOf('.'));
                        try {
                          return Number(t) >= 16;
                        } catch (e) {
                          return !1;
                        }
                      })(e.React) ||
                      e.errorBoundary ||
                      (e.rootComponent.prototype
                        ? e.rootComponent.prototype.componentDidCatch ||
                          console.warn(
                            'single-spa-react: '.concat(
                              t.name || t.appName || t.childAppName,
                              "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application."
                            )
                          )
                        : console.warn(
                            'single-spa-react: '.concat(
                              t.name || t.appName || t.childAppName,
                              "'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts)."
                            )
                          ));
                    var o = h(e, t, function () {
                        r(this);
                      }),
                      a = s(e, t)(),
                      i = (function (e) {
                        var t = e.opts,
                          r = e.elementToRender,
                          n = e.domElement,
                          o =
                            'function' == typeof t.renderType
                              ? t.renderType()
                              : t.renderType;
                        if (
                          [
                            'createRoot',
                            'unstable_createRoot',
                            'createBlockingRoot',
                            'unstable_createBlockingRoot',
                          ].indexOf(o) >= 0
                        ) {
                          var a = t.ReactDOM[o](n);
                          return a.render(r), a;
                        }
                        return (
                          'hydrate' === o
                            ? t.ReactDOM.hydrate(r, n)
                            : t.ReactDOM.render(r, n),
                          null
                        );
                      })({ elementToRender: o, domElement: a, opts: e });
                    (e.domElements[t.name] = a), (e.renderResults[t.name] = i);
                  });
                }
                function f(e, t) {
                  return new Promise(function (r) {
                    e.unmountFinished = r;
                    var n = e.renderResults[t.name];
                    n && n.unmount
                      ? n.unmount()
                      : e.ReactDOM.unmountComponentAtNode(
                          e.domElements[t.name]
                        ),
                      delete e.domElements[t.name],
                      delete e.renderResults[t.name];
                  });
                }
                function y(e, t) {
                  return new Promise(function (r) {
                    e.updateResolves[t.name] || (e.updateResolves[t.name] = []),
                      e.updateResolves[t.name].push(r);
                    var n = h(e, t, null),
                      o = e.renderResults[t.name];
                    if (o && o.render) o.render(n);
                    else {
                      var a = s(e, t)();
                      e.ReactDOM.render(n, a);
                    }
                  });
                }
                function h(e, t, r) {
                  var o = e.React.createElement(e.rootComponent, t),
                    a = l
                      ? e.React.createElement(l.Provider, { value: t }, o)
                      : o;
                  return (
                    (e.errorBoundary ||
                      t.errorBoundary ||
                      e.errorBoundaryClass ||
                      t.errorBoundaryClass) &&
                      ((e.errorBoundaryClass =
                        e.errorBoundaryClass ||
                        t.errorBoundaryClass ||
                        (function (e, t) {
                          function r(t) {
                            e.React.Component.apply(this, arguments),
                              (this.state = {
                                caughtError: null,
                                caughtErrorInfo: null,
                              }),
                              (r.displayName =
                                'SingleSpaReactErrorBoundary('.concat(
                                  t.name,
                                  ')'
                                ));
                          }
                          return (
                            (r.prototype = Object.create(
                              e.React.Component.prototype
                            )),
                            (r.prototype.render = function () {
                              return this.state.caughtError
                                ? (e.errorBoundary || t.errorBoundary)(
                                    this.state.caughtError,
                                    this.state.caughtErrorInfo,
                                    this.props
                                  )
                                : this.props.children;
                            }),
                            (r.prototype.componentDidCatch = function (e, t) {
                              this.setState({
                                caughtError: e,
                                caughtErrorInfo: t,
                              });
                            }),
                            r
                          );
                        })(e, t)),
                      (a = e.React.createElement(e.errorBoundaryClass, t, a))),
                    e.React.createElement(
                      e.SingleSpaRoot,
                      n(
                        n({}, t),
                        {},
                        {
                          mountFinished: r,
                          updateFinished: function () {
                            e.updateResolves[t.name] &&
                              (e.updateResolves[t.name].forEach(function (e) {
                                return e();
                              }),
                              delete e.updateResolves[t.name]);
                          },
                          unmountFinished: function () {
                            setTimeout(e.unmountFinished);
                          },
                        }
                      ),
                      a
                    )
                  );
                }
                var b = i(645),
                  v = i(637),
                  g = (function (e) {
                    if ('object' !== o(e))
                      throw new Error(
                        'single-spa-react requires a configuration object'
                      );
                    var t = n(n({}, p), e);
                    if (!t.React)
                      throw new Error(
                        'single-spa-react must be passed opts.React'
                      );
                    if (!t.ReactDOM)
                      throw new Error(
                        'single-spa-react must be passed opts.ReactDOM'
                      );
                    if (!t.rootComponent && !t.loadRootComponent)
                      throw new Error(
                        'single-spa-react must be passed opts.rootComponent or opts.loadRootComponent'
                      );
                    if (t.errorBoundary && 'function' != typeof t.errorBoundary)
                      throw Error(
                        'The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements'
                      );
                    !l &&
                      t.React.createContext &&
                      (l = t.React.createContext()),
                      (t.SingleSpaRoot = (function (e) {
                        function t(e) {
                          t.displayName = 'SingleSpaRoot('.concat(e.name, ')');
                        }
                        return (
                          (t.prototype = Object.create(
                            e.React.Component.prototype
                          )),
                          (t.prototype.componentDidMount = function () {
                            setTimeout(this.props.mountFinished);
                          }),
                          (t.prototype.componentWillUnmount = function () {
                            setTimeout(this.props.unmountFinished);
                          }),
                          (t.prototype.render = function () {
                            return (
                              setTimeout(this.props.updateFinished),
                              this.props.children
                            );
                          }),
                          t
                        );
                      })(t));
                    var r = {
                      bootstrap: m.bind(null, t),
                      mount: d.bind(null, t),
                      unmount: f.bind(null, t),
                    };
                    return t.parcelCanUpdate && (r.update = y.bind(null, t)), r;
                  })({
                    React: e.default,
                    ReactDOM: t.default,
                    rootComponent: function (e) {
                      return (0, v.jsx)('nav', {
                        style: {
                          height: '80px',
                          background: 'var(--dark-grayish-blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, v.jsxs)('ul', {
                          style: {
                            padding: 0,
                            margin: 0,
                            listStyle: 'none',
                            display: 'flex',
                            gap: '2rem',
                            fontWeight: 'bold',
                            color: 'var(--white)',
                          },
                          children: [
                            (0, v.jsx)('li', {
                              children: (0, v.jsx)('a', {
                                style: { cursor: 'pointer' },
                                onClick: function () {
                                  return (0, b.navigateToUrl)('/');
                                },
                                children: 'React list',
                              }),
                            }),
                            (0, v.jsx)('li', {
                              children: (0, v.jsx)('a', {
                                style: { cursor: 'pointer' },
                                onClick: function () {
                                  return (0, b.navigateToUrl)('/form');
                                },
                                children: 'Angular form',
                              }),
                            }),
                          ],
                        }),
                      });
                    },
                    errorBoundary: function (e, t, r) {
                      return null;
                    },
                  }),
                  O = g.bootstrap,
                  R = g.mount,
                  E = g.unmount;
              })(),
              c
            );
          })()
        );
      },
    }
  );
});
//# sourceMappingURL=throwjs-navbar.js.map
