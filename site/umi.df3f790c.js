(function(e) {
  function t(t) {
    for (
      var o, l, i = t[0], c = t[1], u = t[2], p = 0, d = [];
      p < i.length;
      p++
    )
      (l = i[p]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && d.push(r[l][0]),
        (r[l] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    s && s(t);
    while (d.length) d.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== r[c] && (o = !1);
      }
      o && (a.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 0: 0 },
    a = [];
  function l(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = o),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function(e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          l.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o),
          );
      return n;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e['default'];
            }
          : function() {
              return e;
            };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = 'https://yicoding.github.io/eco-mobile/');
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var s = c;
  a.push([0, 1]), n();
})({
  '/7QA': function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Foo', function() {
        return a;
      });
    var o = n('q1tI'),
      r = n.n(o),
      a = e => {
        var t = e.title;
        return r.a.createElement('h1', null, t);
      };
  },
  0: function(e, t, n) {
    e.exports = n('tB8F');
  },
  '9Ihz': function(e, t) {},
  '9kvl': function(e, t, n) {
    'use strict';
    var o = n('FfOG');
    n.d(t, 'a', function() {
      return o['b'];
    });
    var r = n('bCY9');
    n.d(t, 'b', function() {
      return r['a'];
    });
  },
  'F+kV': function(e, t, n) {
    'use strict';
    n.r(t);
    var o = n('q1tI'),
      r = n.n(o);
    n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd');
    t['default'] = function() {
      return r.a.createElement(
        r.a.Fragment,
        null,
        r.a.createElement(
          'div',
          { className: 'markdown' },
          r.a.createElement(
            'h2',
            { id: 'hello-eco-mobile' },
            r.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#hello-eco-mobile' },
              r.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'Hello eco-mobile!',
          ),
        ),
      );
    };
  },
  FfOG: function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return l;
    }),
      n.d(t, 'b', function() {
        return a;
      });
    var o = n('YS25'),
      r = { basename: '/' };
    window.routerBase && (r.basename = window.routerBase);
    var a = Object({ NODE_ENV: 'production' }).__IS_SERVER
        ? null
        : Object(o['b'])(r),
      l = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e || (a = Object(o['b'])(r)), a;
      };
  },
  MWsa: function(e, t, n) {
    'use strict';
    n.r(t);
    var o = n('wx14'),
      r = n('q1tI'),
      a = n.n(r),
      l = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
      i = n.n(l),
      c = a.a.memo(function() {
        var e = n('TqRt'),
          t = e(n('q1tI')),
          o = n('/7QA'),
          r = function() {
            return t['default'].createElement(o.Foo, { title: 'First Demo' });
          };
        return t['default'].createElement(r);
      });
    t['default'] = function() {
      return a.a.createElement(
        a.a.Fragment,
        null,
        a.a.createElement(
          'div',
          { className: 'markdown' },
          a.a.createElement(
            'h2',
            { id: 'foo' },
            a.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#foo' },
              a.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'Foo',
          ),
          a.a.createElement('p', null, 'Demo:'),
        ),
        a.a.createElement(
          i.a,
          Object(o['a'])(
            {
              source: {
                tsx:
                  "import React from 'react';\nimport { Foo } from 'eco-mobile';\n\nexport default () => <Foo title=\"First Demo\" />;",
                jsx:
                  "import React from 'react';\nimport { Foo } from 'eco-mobile';\n\nexport default () => <Foo title=\"First Demo\" />;\n",
              },
            },
            { dependencies: { 'eco-mobile': '1.0.0' }, files: {} },
          ),
          a.a.createElement(c, null),
        ),
        a.a.createElement(
          'div',
          { className: 'markdown' },
          a.a.createElement(
            'p',
            null,
            'More skills for writing demo: ',
            a.a.createElement(
              'a',
              {
                href: 'https://d.umijs.org/guide/demo-principle',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              'https://d.umijs.org/guide/demo-principle',
              a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  'aria-hidden': !0,
                  x: '0px',
                  y: '0px',
                  viewBox: '0 0 100 100',
                  width: '15',
                  height: '15',
                  className: '__dumi-default-external-link-icon',
                },
                a.a.createElement('path', {
                  fill: 'currentColor',
                  d:
                    'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                }),
                a.a.createElement('polygon', {
                  fill: 'currentColor',
                  points:
                    '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                }),
              ),
            ),
          ),
        ),
      );
    };
  },
  bCY9: function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var o = n('LtsZ'),
      r = new o['Plugin']({
        validKeys: [
          'modifyClientRenderOpts',
          'patchRoutes',
          'rootContainer',
          'render',
          'onRouteChange',
        ],
      });
  },
  tB8F: function(e, t, n) {
    'use strict';
    n.r(t);
    n('pNMO'),
      n('4Brf'),
      n('tjZM'),
      n('3I1R'),
      n('7+kd'),
      n('KhsS'),
      n('gOCb'),
      n('a57n'),
      n('GXvd'),
      n('I1Gw'),
      n('gXIK'),
      n('lEou'),
      n('ma9I'),
      n('piMb'),
      n('TeQF'),
      n('BIHw'),
      n('XbcX'),
      n('QWBl'),
      n('pjDv'),
      n('yq1k'),
      n('yXV3'),
      n('4mDm'),
      n('uqXc'),
      n('2B1R'),
      n('E9XD'),
      n('9N29'),
      n('Junv'),
      n('+2oP'),
      n('Rfxz'),
      n('ToJy'),
      n('94Xl'),
      n('pDQq'),
      n('QGkA'),
      n('c9m3'),
      n('rOQg'),
      n('7+zs'),
      n('tW5y'),
      n('DEfu'),
      n('Tskq'),
      n('Uydy'),
      n('QFcT'),
      n('I9xj'),
      n('w1rZ'),
      n('toAj'),
      n('zKZe'),
      n('Eqjn'),
      n('5xtp'),
      n('T63A'),
      n('wfmh'),
      n('27RR'),
      n('v5b1'),
      n('W/eh'),
      n('07d7'),
      n('B6y2'),
      n('5s+n'),
      n('p532'),
      n('pv2x'),
      n('SuFq'),
      n('ftMj'),
      n('U3f4'),
      n('JfAA'),
      n('YGK4'),
      n('inlA'),
      n('JTJg'),
      n('Rm1S'),
      n('hDyC'),
      n('TZCg'),
      n('UxlC'),
      n('hByQ'),
      n('EnZy'),
      n('LKBx'),
      n('SYor'),
      n('HiXI'),
      n('7ueG'),
      n('z8NH'),
      n('SpvK'),
      n('/Yfv'),
      n('iwkZ'),
      n('FDzp'),
      n('XMab'),
      n('ilnZ'),
      n('hMMk'),
      n('+ywr'),
      n('IL/d'),
      n('gvgV'),
      n('7JcK'),
      n('s5qe'),
      n('cvf0'),
      n('ENF9'),
      n('H+LF'),
      n('66V8'),
      n('iIM6'),
      n('2tOg'),
      n('gYJb'),
      n('EDT/'),
      n('j+VE'),
      n('wgYD'),
      n('R3/m'),
      n('l/vG'),
      n('0q/z'),
      n('n5pg'),
      n('zu+z'),
      n('ihrJ'),
      n('Q7Pz'),
      n('unQa'),
      n('Vnov'),
      n('nIe3'),
      n('CUyW'),
      n('qc1c'),
      n('5921'),
      n('VOz1'),
      n('Thag'),
      n('9D6x'),
      n('cOPa'),
      n('vdRX'),
      n('KrxN'),
      n('SL6q'),
      n('lehK'),
      n('eO0o'),
      n('NqR8'),
      n('w7s6'),
      n('uWhJ'),
      n('WPzJ'),
      n('NV22'),
      n('ny8l'),
      n('a5/B'),
      n('vzwy'),
      n('pevA'),
      n('8go2'),
      n('DrvE'),
      n('kCkZ'),
      n('++zV'),
      n('Y4C7'),
      n('ZsH6'),
      n('vZi8'),
      n('5r1n'),
      n('sQ9d'),
      n('bdeN'),
      n('AwgR'),
      n('qgGA'),
      n('49+q'),
      n('AVoK'),
      n('hcok'),
      n('dNT4'),
      n('3uUd'),
      n('tijO'),
      n('1kQv'),
      n('ZY7T'),
      n('C1JJ'),
      n('lmH4'),
      n('Co1j'),
      n('5JV0'),
      n('ctDJ'),
      n('8r4s'),
      n('JwUS'),
      n('qaHo'),
      n('Si40'),
      n('BGb9'),
      n('fN96'),
      n('UzNg'),
      n('DhMN'),
      n('rZ3M'),
      n('apDx'),
      n('4XaG'),
      n('6V7H'),
      n('cfiF'),
      n('702D'),
      n('TJ79'),
      n('Z4nd'),
      n('8STE'),
      n('spTT'),
      n('rb3L'),
      n('FZtP'),
      n('3bBZ'),
      n('Ew+T'),
      n('n5b4'),
      n('Kz25'),
      n('vxnP'),
      n('mGGf'),
      n('VWci');
    var o = n('bCY9'),
      r = (n('9Ihz'), n('FfOG')),
      a = n('LtsZ'),
      l = n('zlVK'),
      i = n('VTBJ');
    function c() {
      var e = [
        {
          path: '/',
          component: e =>
            n('q1tI').createElement(
              n('09U7').default,
              Object(i['a'])(
                Object(i['a'])(
                  {},
                  {
                    menus: {
                      '*': {
                        '*': [
                          { path: '/', title: 'Hello eco-mobile!', meta: {} },
                          {
                            title: 'Foo',
                            path: '/foo',
                            meta: {},
                            children: [],
                          },
                        ],
                      },
                    },
                    locales: [],
                    navs: {},
                    title: 'eco-mobile',
                    logo:
                      'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
                    mode: 'doc',
                    repoUrl: 'https://github.com/Yicoding/eco-mobile',
                  },
                ),
                e,
              ),
            ),
          routes: [
            {
              path: '/foo',
              component: n('MWsa').default,
              exact: !0,
              meta: {
                filePath: 'src/Foo/index.md',
                updatedTime: 1608622108e3,
                slugs: [{ depth: 2, value: 'Foo', heading: 'foo' }],
                title: 'Foo',
                group: { path: '/foo', title: 'Foo' },
              },
              title: 'Foo',
            },
            {
              path: '/',
              component: n('F+kV').default,
              exact: !0,
              meta: {
                filePath: 'docs/index.md',
                updatedTime: 1608622108e3,
                slugs: [
                  {
                    depth: 2,
                    value: 'Hello eco-mobile!',
                    heading: 'hello-eco-mobile',
                  },
                ],
                title: 'Hello eco-mobile!',
              },
              title: 'Hello eco-mobile!',
            },
          ],
          title: 'eco-mobile',
        },
      ];
      return (
        o['a'].applyPlugins({
          key: 'patchRoutes',
          type: a['ApplyPluginsType'].event,
          args: { routes: e },
        }),
        e
      );
    }
    var u = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return o['a'].applyPlugins({
          key: 'render',
          type: a['ApplyPluginsType'].compose,
          initialValue: () => {
            var t = o['a'].applyPlugins({
              key: 'modifyClientRenderOpts',
              type: a['ApplyPluginsType'].modify,
              initialValue: {
                routes: e.routes || c(),
                plugin: o['a'],
                history: Object(r['a'])(e.hot),
                isServer: Object({ NODE_ENV: 'production' }).__IS_SERVER,
                rootElement: 'root',
                defaultTitle: 'eco-mobile',
              },
            });
            return Object(l['renderClient'])(t);
          },
          args: e,
        });
      },
      s = u();
    t['default'] = s();
    window.g_umi = { version: '3.3.3' };
  },
});
