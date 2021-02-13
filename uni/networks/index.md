<!-- 
| Layer                        | Protocols               |
| ---------------------------- | ----------------------- |
| [Physical]()                 |                         |
| [Link]()                     |                         |
| [Network]()                  |                         |
| [Transport]()                |                         |
| [Application](./application) | HTTP, FTP, SSH, DNS,... | -->

# Networking from scratch

The basic premise of networking is being able to send and receive data from device A to B.

Here is how ethernet does it:
<style>
  .parts div {
    border: solid 1px #111;
    border-right-width: 0;
  }
  .parts div:last-of-type {
    border-right-width: 1px;
  }
</style>
<div class="parts" style="display: flex; width: 100%; height: 80px;">
  <div style="flex-grow: 7"></div>
  <div style="flex-grow: 1"></div>
  <div style="flex-grow: 6"></div>
  <div style="flex-grow: 6"></div>
  <div style="flex-grow: 4"></div>
  <div style="flex-grow: 2"></div>
  <div style="flex-grow: 46"></div>
  <div style="flex-grow: 4"></div>
  <div style="flex-grow: 12"></div>
</div>
or at max size  :
<div class="parts" style="display: flex; width: 100%; height: 80px;">
  <div style="flex-grow: 7"></div>
  <div style="flex-grow: 1"></div>
  <div style="flex-grow: 6"></div>
  <div style="flex-grow: 6"></div>
  <div style="flex-grow: 4"></div>
  <div style="flex-grow: 2"></div>
  <div style="flex-grow: 15000"></div>
  <div style="flex-grow: 4"></div>
  <div style="flex-grow: 12"></div>
</div>
or

<!-- 
```go
type Physical struct {
  Send(to net.H, buffer []byte)
}
``` -->