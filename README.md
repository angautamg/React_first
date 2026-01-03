<h1 align="center">🔗 Communication Techniques</h1>

<p align="center">
  This section explains different <b>client–server communication mechanisms</b>
  and how they are used in real-world applications.
</p>

<hr/>

<h2>📡 Communication Overview</h2>

<p>
Communication in web applications defines <b>how data flows</b> between the client (browser/app)
and the server. Choosing the right communication method depends on:
</p>

<ul>
  <li>Real-time requirements</li>
  <li>Server load</li>
  <li>Network efficiency</li>
  <li>Scalability</li>
</ul>

<hr/>

<h2>⏱️ Short Polling</h2>

<p>
<b>Short Polling</b> is a technique where the client repeatedly sends requests to the server
at fixed intervals to check for new data.
</p>

<h4>🛠️ How It Works</h4>
<ul>
  <li>Client sends a request</li>
  <li>Server responds immediately</li>
  <li>Client waits for a short time</li>
  <li>Client sends the next request</li>
</ul>

<h4>✅ When to Use</h4>
<ul>
  <li>Simple implementations</li>
  <li>Low traffic or non–real-time data</li>
</ul>

<h4>❌ Drawbacks</h4>
<ul>
  <li>Unnecessary requests</li>
  <li>Higher server load</li>
</ul>

<p><b>📁 Example:</b> See the Short Polling example in this repository.</p>

<hr/>

<h2>⏳ Long Polling</h2>

<p>
<b>Long Polling</b> improves short polling by keeping the request open until
new data is available or a timeout occurs.
</p>

<h4>🛠️ How It Works</h4>
<ul>
  <li>Client sends request</li>
  <li>Server holds connection</li>
  <li>Responds only when data is available</li>
  <li>Client immediately sends next request</li>
</ul>

<h4>✅ When to Use</h4>
<ul>
  <li>Near real-time updates</li>
  <li>Chat or notification systems</li>
</ul>

<h4>❌ Drawbacks</h4>
<ul>
  <li>Connections stay open longer</li>
  <li>Not truly real-time</li>
</ul>

<p><b>📁 Example:</b> See the Long Polling implementation in this repository.</p>

<hr/>

<h2>🔌 WebSockets</h2>

<p>
<b>WebSockets</b> provide a <b>full-duplex, persistent connection</b>
between client and server, enabling real-time communication.
</p>

<h4>🛠️ How It Works</h4>
<ul>
  <li>Single persistent connection</li>
  <li>Client and server send data anytime</li>
  <li>No repeated HTTP requests</li>
</ul>

<h4>✅ When to Use</h4>
<ul>
  <li>Real-time chat</li>
  <li>Live dashboards</li>
  <li>Online gaming</li>
</ul>

<h4>❌ Drawbacks</h4>
<ul>
  <li>More complex setup</li>
  <li>Scaling requires careful planning</li>
</ul>

<p><b>📁 Example:</b> WebSocket example is available in this repository.</p>

<hr/>

<h2>📨 Server-Sent Events (SSE)</h2>

<p>
<b>Server-Sent Events</b> allow the server to push updates to the client
over a one-way persistent HTTP connection.
</p>

<h4>🛠️ How It Works</h4>
<ul>
  <li>Client subscribes once</li>
  <li>Server continuously sends updates</li>
  <li>Connection stays open</li>
</ul>

<h4>✅ When to Use</h4>
<ul>
  <li>Live notifications</li>
  <li>Stock prices</li>
  <li>Real-time logs</li>
</ul>

<h4>❌ Drawbacks</h4>
<ul>
  <li>Server → Client only</li>
  <li>Limited browser support in older browsers</li>
</ul>

<p><b>📁 Example:</b> SSE example is included in this repository.</p>

<hr/>

<h2>🔔 WebHooks</h2>

<p>
<b>WebHooks</b> are event-based HTTP callbacks where one system
automatically notifies another system when an event occurs.
</p>

<h4>🛠️ How It Works</h4>
<ul>
  <li>Event occurs in System A</li>
  <li>System A sends HTTP request to System B</li>
  <li>System B processes the event</li>
</ul>

<h4>✅ When to Use</h4>
<ul>
  <li>Payment gateways</li>
  <li>GitHub events</li>
  <li>Third-party integrations</li>
</ul>

<h4>❌ Drawbacks</h4>
<ul>
  <li>Requires public endpoint</li>
  <li>Needs security validation</li>
</ul>

<p><b>📁 Example:</b> WebHook implementation can be found in this repository.</p>

<hr/>

<h2>📊 Quick Comparison</h2>

<table border="1" cellpadding="8">
  <tr>
    <th>Method</th>
    <th>Real-Time</th>
    <th>Direction</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td>Short Polling</td>
    <td>❌</td>
    <td>Client → Server</td>
    <td>Simple updates</td>
  </tr>
  <tr>
    <td>Long Polling</td>
    <td>⚠️</td>
    <td>Client → Server</td>
    <td>Notifications</td>
  </tr>
  <tr>
    <td>WebSockets</td>
    <td>✅</td>
    <td>Two-way</td>
    <td>Chat, live apps</td>
  </tr>
  <tr>
    <td>SSE</td>
    <td>✅</td>
    <td>Server → Client</td>
    <td>Live feeds</td>
  </tr>
  <tr>
    <td>WebHooks</td>
    <td>Event-based</td>
    <td>Server → Server</td>
    <td>Integrations</td>
  </tr>
</table>

<hr/>

<p align="center">
  🚀 Choose the right communication method based on your application needs.
</p>

<h1 align="center">🧭 Communication Architecture & Flow</h1>

<p align="center">
Visual understanding of how different communication mechanisms work internally.
</p>

<hr/>

<h2>📡 Short Polling – Architecture</h2>

<p>
In short polling, the client repeatedly asks the server for updates at fixed intervals.
The server responds immediately, even if no new data is available.
</p>

<pre>
Client  ─── request ───▶ Server
Client  ◀── response ── Server
(wait)
Client  ─── request ───▶ Server
</pre>

<p><b>Best for:</b> Simple apps, low-frequency updates</p>

<hr/>

<h2>⏳ Long Polling – Architecture</h2>

<p>
Long polling keeps the request open until new data is available or a timeout occurs.
Once the response is received, the client immediately sends a new request.
</p>

<pre>
Client ─── request ───▶ Server
          (waiting...)
Client ◀── response ── Server
Client ─── request ───▶ Server
</pre>

<p><b>Best for:</b> Notifications, near real-time updates</p>

<hr/>

<h2>🔌 WebSockets – Architecture</h2>

<p>
WebSockets establish a single persistent connection that allows
both client and server to send data at any time.
</p>

<pre>
Client ◀═══════▶ Server
        Persistent
        Connection
</pre>

<p><b>Best for:</b> Chat apps, live dashboards, multiplayer games</p>

<hr/>

<h2>📨 Server-Sent Events (SSE) – Architecture</h2>

<p>
SSE uses a persistent HTTP connection where only the server
can push updates to the client.
</p>

<pre>
Client ─── subscribe ─▶ Server
Client ◀══ event stream ═ Server
Client ◀══ event stream ═ Server
</pre>

<p><b>Best for:</b> Live feeds, logs, stock prices</p>

<hr/>

<h2>🔔 WebHooks – Architecture</h2>

<p>
WebHooks are server-to-server communication.
When an event occurs, one system sends an HTTP request to another system automatically.
</p>

<pre>
System A (Event)
       │
       └── HTTP POST ──▶ System B (Webhook Endpoint)
</pre>

<p><b>Best for:</b> Payments, CI/CD, third-party integrations</p>

<hr/>

<h2>📊 Visual Comparison</h2>

<table border="1" cellpadding="8">
  <tr>
    <th>Type</th>
    <th>Connection</th>
    <th>Direction</th>
    <th>Real-Time</th>
  </tr>
  <tr>
    <td>Short Polling</td>
    <td>Repeated HTTP</td>
    <td>Client → Server</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Long Polling</td>
    <td>Held HTTP</td>
    <td>Client → Server</td>
    <td>⚠️</td>
  </tr>
  <tr>
    <td>WebSockets</td>
    <td>Persistent</td>
    <td>Two-way</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>SSE</td>
    <td>Persistent</td>
    <td>Server → Client</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>WebHooks</td>
    <td>Event-based</td>
    <td>Server → Server</td>
    <td>Event-driven</td>
  </tr>
</table>

<hr/>

<p align="center">
⭐ Each example implementation is available in this repository with code.
</p>

