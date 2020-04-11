export const apiPrefix = '/api';
export const futurePrefix = '/future';
export const contractMangerPrefix = '/contract-manager';

export const contractPrefix = futurePrefix;
export const errorCodes = {
  UnexpectedError: 10000,
  ParameterError: 10001,
  FilterError: 10002,
  DBError: 10999,
  BlockNotFoundError: 20404,
  TxNotFoundError: 30404,
  ContractNotFound: 40404,
};

export const UPDATE_COMMON = 'UPDATE_COMMON';

export const IMG_PFX = 'data:image/png;base64, ';
export const addressTypeContract = 'contract';
export const addressTypeCommon = 'common';
export const defaultContractIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDBweCIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+55S75p2/5aSH5Lu9PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxnIGlkPSLnlLvmnb/lpIfku70iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImNvbnRyYWN0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4wMDAwMDAsIDMyLjAwMDAwMCkiPiAgICAgICAgICAgIDxnIGlkPSJDb250cmFjdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMTQyODU3KSIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LjYxNDE4LDE0LjU2NDczMjEgTDQ3LjExNzk2MjgsMTQuNTY0NzMyMSBDNDguNzQxMDM5NSwxNC41NjQ3MzIxIDQ5LjMyOTYxNjIsMTQuNzMzNzYzOCA0OS45MjI5NjY5LDE1LjA1MTAzMiBDNTAuNTE2MzE3NiwxNS4zNjgzODExIDUwLjk4MjA2NTIsMTUuODM0MTI4NSA1MS4yOTkzMzM0LDE2LjQyNzQ3OSBDNTEuNjE2NjgyNiwxNy4wMjA4Mjk2IDUxLjc4NTcxNDMsMTcuNjA5NDA2MSA1MS43ODU3MTQzLDE5LjIzMjQ4MjQgTDUxLjc4NTcxNDMsMzUuNzg5ODM5IEM1MS43ODU3MTQzLDM3LjQxMjkxNTMgNTEuNjE2NjgyNiwzOC4wMDE0OTE5IDUxLjI5OTQxNDMsMzguNTk0ODQyNCBDNTAuOTgyMDY1MiwzOS4xODgxOTMgNTAuNTE2MzE3NiwzOS42NTM5NDA0IDQ5LjkyMjk2NjksMzkuOTcxMjA4NSBDNDkuMzI5NjE2Miw0MC4yODg1NTc2IDQ4Ljc0MTAzOTUsNDAuNDU3NTg5MyA0Ny4xMTc5NjI4LDQwLjQ1NzU4OTMgTDE3LjYxNDE4LDQwLjQ1NzU4OTMgQzE1Ljk5MTEwMzMsNDAuNDU3NTg5MyAxNS40MDI1MjY2LDQwLjI4ODU1NzYgMTQuODA5MTc1OSwzOS45NzEyODk0IEMxNC4yMTU4MjUyLDM5LjY1Mzk0MDQgMTMuNzUwMDc3NywzOS4xODgxOTMgMTMuNDMyODA5NSwzOC41OTQ4NDI0IEMxMy4xMTU0NjAzLDM4LjAwMTQ5MTkgMTIuOTQ2NDI4NiwzNy40MTI5MTUzIDEyLjk0NjQyODYsMzUuNzg5ODM5IEwxMi45NDY0Mjg2LDE5LjIzMjQ4MjQgQzEyLjk0NjQyODYsMTcuNjA5NDA2MSAxMy4xMTU0NjAzLDE3LjAyMDgyOTYgMTMuNDMyNzI4NSwxNi40Mjc0NzkgQzEzLjc1MDA3NzcsMTUuODM0MTI4NSAxNC4yMTU4MjUyLDE1LjM2ODM4MTEgMTQuODA5MTc1OSwxNS4wNTExMTI5IEMxNS40MDI1MjY2LDE0LjczMzc2MzggMTUuOTkxMTAzMywxNC41NjQ3MzIxIDE3LjYxNDE4LDE0LjU2NDczMjEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0MyRUJGRiI+PC9wYXRoPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuMTQwOTY1OCw4LjA5MTUxNzg2IEw0MC42NDQ3NDg1LDguMDkxNTE3ODYgQzQyLjI2NzgyNTIsOC4wOTE1MTc4NiA0Mi44NTY0MDE5LDguMjYwNTQ5NTMgNDMuNDQ5NzUyNiw4LjU3NzgxNzcgQzQ0LjA0MzEwMzMsOC44OTUxNjY3OCA0NC41MDg4NTA5LDkuMzYwOTE0MTkgNDQuODI2MTE5MSw5Ljk1NDI2NDczIEM0NS4xNDM0NjgzLDEwLjU0NzYxNTMgNDUuMzEyNSwxMS4xMzYxOTE4IDQ1LjMxMjUsMTIuNzU5MjY4MSBMNDUuMzEyNSwyOS4zMTY2MjQ3IEM0NS4zMTI1LDMwLjkzOTcwMSA0NS4xNDM0NjgzLDMxLjUyODI3NzYgNDQuODI2MiwzMi4xMjE2MjgxIEM0NC41MDg4NTA5LDMyLjcxNDk3ODcgNDQuMDQzMTAzMywzMy4xODA3MjYxIDQzLjQ0OTc1MjYsMzMuNDk3OTk0MiBDNDIuODU2NDAxOSwzMy44MTUzNDMzIDQyLjI2NzgyNTIsMzMuOTg0Mzc1IDQwLjY0NDc0ODUsMzMuOTg0Mzc1IEwxMS4xNDA5NjU4LDMzLjk4NDM3NSBDOS41MTc4ODkwNCwzMy45ODQzNzUgOC45MjkzMTIzNCwzMy44MTUzNDMzIDguMzM1OTYxNjQsMzMuNDk4MDc1MiBDNy43NDI2MTA5NSwzMy4xODA3MjYxIDcuMjc2ODYzNDIsMzIuNzE0OTc4NyA2Ljk1OTU5NTE3LDMyLjEyMTYyODEgQzYuNjQyMTY1MDksMzEuNTI4Mjc3NiA2LjQ3MzIxNDI5LDMwLjkzOTcwMSA2LjQ3MzIxNDI5LDI5LjMxNjYyNDcgTDYuNDczMjE0MjksMTIuNzU5MjY4MSBDNi40NzMyMTQyOSwxMS4xMzYxOTE4IDYuNjQyMjQ2MDEsMTAuNTQ3NjE1MyA2Ljk1OTUxNDI2LDkuOTU0MjY0NzMgQzcuMjc2ODYzNDIsOS4zNjA5MTQxOSA3Ljc0MjYxMDk1LDguODk1MTY2NzggOC4zMzU5NjE2NCw4LjU3Nzg5ODYyIEM4LjkyOTMxMjM0LDguMjYwNTQ5NTMgOS41MTc4ODkwNCw4LjA5MTUxNzg2IDExLjE0MDk2NTgsOC4wOTE1MTc4NiBMMTEuMTQwOTY1OCw4LjA5MTUxNzg2IFoiIGlkPSLot6/lvoQiIGZpbGw9IiM1NzlBRkYiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjE3MTUzNDIsMCBDMzUuNzk0NjExLDAgMzYuMzgzMTg3NywwLjE2OTAzMTY3NiAzNi45NzY1Mzg0LDAuNDg2Mjk5ODQzIEMzNy41Njk4ODkxLDAuODAzNjQ4OTI2IDM4LjAzNTYzNjYsMS4yNjkzOTYzMyAzOC4zNTI5MDQ4LDEuODYyNzQ2ODcgQzM4LjY3MDI1NCwyLjQ1NjA5NzQxIDM4LjgzOTI4NTcsMy4wNDQ2NzM5NiAzOC44MzkyODU3LDQuNjY3NzUwMjYgTDM4LjgzOTI4NTcsMjEuMjI1MTA2OSBDMzguODM5Mjg1NywyMi44NDgxODMyIDM4LjY3MDI1NCwyMy40MzY3NTk3IDM4LjM1Mjk4NTcsMjQuMDMwMTEwMyBDMzguMDM1NjM2NiwyNC42MjM0NjA4IDM3LjU2OTg4OTEsMjUuMDg5MjA4MiAzNi45NzY1Mzg0LDI1LjQwNjQ3NjQgQzM2LjM4MzE4NzcsMjUuNzIzODI1NSAzNS43OTQ2MTEsMjUuODkyODU3MSAzNC4xNzE1MzQyLDI1Ljg5Mjg1NzEgTDQuNjY3NzUxNDgsMjUuODkyODU3MSBDMy4wNDQ2NzQ3NSwyNS44OTI4NTcxIDIuNDU2MDk4MDUsMjUuNzIzODI1NSAxLjg2Mjc0NzM2LDI1LjQwNjU1NzMgQzEuMjY5Mzk2NjYsMjUuMDg5MjA4MiAwLjgwMzY0OTEzNSwyNC42MjM0NjA4IDAuNDg2MzgwODg1LDI0LjAzMDExMDMgQzAuMTY4OTUwODA1LDIzLjQzNjc1OTcgMCwyMi44NDgxODMyIDAsMjEuMjI1MTA2OSBMMCw0LjY2Nzc1MDI2IEMwLDMuMDQ0NjczOTYgMC4xNjkwMzE3MiwyLjQ1NjA5NzQxIDAuNDg2Mjk5OTcsMS44NjI3NDY4NyBDMC44MDM2NDkxMzUsMS4yNjkzOTYzMyAxLjI2OTM5NjY2LDAuODAzNjQ4OTI2IDEuODYyNzQ3MzYsMC40ODYzODA3NTggQzIuNDU2MDk4MDUsMC4xNjg5NTA3NjEgMy4wNDQ2NzQ3NSwwIDQuNjY3NzUxNDgsMCBMMzQuMTcxNTM0MiwwIFoiIGlkPSLot6/lvoQiIGZpbGw9IiMxNzMyRTYiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjkyMTUwMyw2LjQ3MzIxNDI4IEwyOC41MzYwODYzLDYuNDczMjE0MjggTDI4LjUzNjA4NjMsNi40NzMyMTQyOCBDMjguODYzODAwMSw2LjQ3MzIxNDI4IDI5LjEyOTQ2NDMsNi45MDc5Mzc1NSAyOS4xMjk0NjQzLDcuNDQ0MTk2NDMgQzI5LjEyOTQ2NDMsNy45ODA0NTUzIDI4Ljg2MzgwMDEsOC40MTUxNzg1NyAyOC41MzYwODYzLDguNDE1MTc4NTcgTDExLjkyMTUwMyw4LjQxNTE3ODU3IEwxMS45MjE1MDMsOC40MTUxNzg1NyBDMTEuNTkzNzg5Miw4LjQxNTE3ODU3IDExLjMyODEyNSw3Ljk4MDQ1NTMgMTEuMzI4MTI1LDcuNDQ0MTk2NDMgQzExLjMyODEyNSw2LjkwNzkzNzU1IDExLjU5Mzc4OTIsNi40NzMyMTQyOCAxMS45MjE1MDMsNi40NzMyMTQyOCBMMTEuOTIxNTAzLDYuNDczMjE0MjggWiBNMTEuOTUwNTQ5NSwxMi4xMzcyNzY4IEwyNi44ODg3MzYzLDEyLjEzNzI3NjggTDI2Ljg4ODczNjMsMTIuMTM3Mjc2OCBDMjcuMjMyNDkyLDEyLjEzNzI3NjggMjcuNTExMTYwNywxMi41NzIwMDAxIDI3LjUxMTE2MDcsMTMuMTA4MjU4OSBDMjcuNTExMTYwNywxMy42NDQ1MTc4IDI3LjIzMjQ5MiwxNC4wNzkyNDExIDI2Ljg4ODczNjMsMTQuMDc5MjQxMSBMMTEuOTUwNTQ5NSwxNC4wNzkyNDExIEwxMS45NTA1NDk0LDE0LjA3OTI0MTEgQzExLjYwNjc5MzgsMTQuMDc5MjQxMSAxMS4zMjgxMjUsMTMuNjQ0NTE3OCAxMS4zMjgxMjUsMTMuMTA4MjU4OSBDMTEuMzI4MTI1LDEyLjU3MjAwMDEgMTEuNjA2NzkzOCwxMi4xMzcyNzY4IDExLjk1MDU0OTQsMTIuMTM3Mjc2OCBMMTEuOTUwNTQ5NSwxMi4xMzcyNzY4IFogTTExLjk3NTQ0NjUsMTcuODAxMzM5MyBMMjAuMzkwNjI1LDE3LjgwMTMzOTMgTDIwLjM5MDYyNSwxNy44MDEzMzkzIEMyMC43NDgxMzA5LDE3LjgwMTMzOTMgMjEuMDM3OTQ2NCwxOC4yMzYwNjI2IDIxLjAzNzk0NjQsMTguNzcyMzIxNCBDMjEuMDM3OTQ2NCwxOS4zMDg1ODAzIDIwLjc0ODEzMDksMTkuNzQzMzAzNiAyMC4zOTA2MjUsMTkuNzQzMzAzNiBMMTEuOTc1NDQ2NSwxOS43NDMzMDM2IEwxMS45NzU0NDY0LDE5Ljc0MzMwMzYgQzExLjYxNzk0MDUsMTkuNzQzMzAzNiAxMS4zMjgxMjUsMTkuMzA4NTgwMyAxMS4zMjgxMjUsMTguNzcyMzIxNCBDMTEuMzI4MTI1LDE4LjIzNjA2MjYgMTEuNjE3OTQwNSwxNy44MDEzMzkzIDExLjk3NTQ0NjQsMTcuODAxMzM5MyBMMTEuOTc1NDQ2NSwxNy44MDEzMzkzIFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4gICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPGcgaWQ9InNwYXJrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjU3MTQyOSwgMy43MTQyODYpIiBmaWxsPSIjRkZGRkZGIj4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBjeD0iMS4wNzE0Mjg1NyIgY3k9IjEuMDcxNDI4NTciIHI9IjEuMDcxNDI4NTciPjwvY2lyY2xlPiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaLlpIfku70iIGN4PSIxLjA3MTQyODU3IiBjeT0iNy4zMjE0Mjg1NyIgcj0iMS4wNzE0Mjg1NyI+PC9jaXJjbGU+ICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9ouWkh+S7vS0yIiBjeD0iMS4wNzE0Mjg1NyIgY3k9IjEzLjU3MTQyODYiIHI9IjEuMDcxNDI4NTciPjwvY2lyY2xlPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==';
export const defaultTokenIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MS4yICg4OTY1MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+55S75p2/PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IueUu+advyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlRva2VucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDAwMDAwLCAyOC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ik1haW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNDI4NTcxLCAwLjU3MTQyOSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuMTY3NDg5NSwxMS44MDg4NjIyIEMyNC42ODc4MDQ1LDExLjEzMDA2MiAyMy44NDc1NjA5LDEwLjcxNjcyMDMgMjIuOTQyNDk0MiwxMC43MTQyODU3IEw3LjQyMDE3MTE4LDEwLjcxNDI4NTcgQzYuNTEwNDIwMDEsMTAuNzEyNzA3OCA1LjY2NDE3NTIxLDExLjEyNjU1MzcgNS4xODIwMDg2NiwxMS44MDg4NjIzIEwwLjQwMjg4MTI5OCwxOC41NzQwODcxIEMtMC4yMTE3NDcwOTIsMTkuNDQwMjIxMSAtMC4xMTU2MTc5OCwyMC41NTk2MzYgMC42Mzk4NjMxNSwyMS4zMzM3MjY3IEwxNC4xNzQxNTQyLDM1LjMwNjYzMTggQzE0LjY0NjcyNTUsMzUuNzk1Mzc2MiAxNS40Nzc3OTksMzUuODUyNzYxNCAxNi4wMzA0MTE2LDM1LjQzNDgwNjQgQzE2LjA4MjQxMiwzNS4zOTU0NzcxIDE2LjEzMDg2NjYsMzUuMzUyNjIyNCAxNi4xNzUzMzUyLDM1LjMwNjYzMTggTDI5LjcwOTYyNjIsMjEuMzMzNzI2NyBDMzAuNDY5MjkzLDIwLjU2MjI4MjUgMzAuNTcwNzc0NSwxOS40NDI3MDQgMjkuOTU5NzczNiwxOC41NzQwODcxIEwyNS4xNjc0ODk1LDExLjgwODg2MjIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzU3OUFGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ3LjgxNzE1NTgsMjcuNjE3MzA4MSBDNDcuNDUwMzM3OSwyNy4xMDE1OTYyIDQ2LjgwNzc5ODcsMjYuNzg3NTYzOSA0Ni4xMTU2ODg4LDI2Ljc4NTcxNDMgTDM0LjI0NTY3NzEsMjYuNzg1NzE0MyBDMzMuNTQ5OTg1MSwyNi43ODQ1MTU1IDMyLjkwMjg1NjcsMjcuMDk4OTMwOCAzMi41MzQxNDExLDI3LjYxNzMwODIgTDI4Ljg3OTUxNDMsMzIuNzU3MTIxOCBDMjguNDA5NTA0MywzMy40MTUxNTg3IDI4LjQ4MzAxNDgsMzQuMjY1NjIzMyAyOS4wNjA3MzU3LDM0Ljg1MzczMTIgTDM5LjQxMDQ4NzcsNDUuNDY5NTA5NyBDMzkuNzcxODY1Nyw0NS44NDA4Mjg1IDQwLjQwNzM5MjUsNDUuODg0NDI2MyA0MC44Mjk5Nzg2LDQ1LjU2Njg4OTEgQzQwLjg2OTc0MzYsNDUuNTM3MDA5MSA0MC45MDY3OTcyLDQ1LjUwNDQ1MDYgNDAuOTQwODAyNSw0NS40Njk1MDk3IEw1MS4yOTA1NTQ1LDM0Ljg1MzczMTIgQzUxLjg3MTQ3NjEsMzQuMjY3NjMzOSA1MS45NDkwNzk3LDMzLjQxNzA0NTEgNTEuNDgxODQzNywzMi43NTcxMjE4IEw0Ny44MTcxNTU4LDI3LjYxNzMwODEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0MyRUJGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LjY4MDIzOTcsMS4zMjkxMjk4NiBDNDUuMTE1OTA0NSwwLjUwNDg3MTYyIDQ0LjEyNzM4MjYsMC4wMDI5NTYyMzgzNiA0My4wNjI1OTgyLDYuMDI2OTI0OTllLTE0IEwyNC44MDEwNDE3LDYuMDI2OTI0OTllLTE0IEMyMy43MzA3NDYyLC0wLjAwMTkxNjA0Nzk5IDIyLjczNTE2NDEsMC41MDA2MTE1NDMgMjIuMTY3OTA5MywxLjMyOTEyOTg5IEwxNi41NDU0MDY2LDkuNTQ0MDUzMjYgQzE1LjgyMjMxNDMsMTAuNTk1Nzg4NCAxNS45MzU0MDc0LDExLjk1NTA3OTIgMTYuODI0MjA4NywxMi44OTUwNDczIEwzMi43NDY5MDQxLDI5Ljg2MjE2MTggQzMzLjMwMjg3MDMsMzAuNDU1NjM3OCAzNC4yODA2MDM5LDMwLjUyNTMxOTggMzQuOTMwNzM2NCwzMC4wMTc4MDI2IEMzNC45OTE5MTMzLDI5Ljk3MDA0NTYgMzUuMDQ4OTE4NywyOS45MTgwMDc3IDM1LjEwMTIzNDcsMjkuODYyMTYxOCBMNTEuMDIzOTMsMTIuODk1MDQ3MyBDNTEuOTE3NjU1NiwxMS45NTgyOTI4IDUyLjAzNzA0NTcsMTAuNTk4ODAzNCA1MS4zMTgyMjEsOS41NDQwNTMyNSBMNDUuNjgwMjM5NywxLjMyOTEyOTg2IFoiIGlkPSLot6/lvoQiIGZpbGw9IiMxNzMyRTYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0ic3BhcmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCAxMy4wNzE0MjkpIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC40NTcxNDI5LDcuMTQyODU3MTQgTDMxLjU0Mjg1NzEsNy4xNDI4NTcxNCBDMzEuODc0MjI4LDcuMTQyODU3MTQgMzIuMTQyODU3MSw3LjQxMTQ4NjI5IDMyLjE0Mjg1NzEsNy43NDI4NTcxNCBMMzIuMTQyODU3MSw4LjY4NTcxNDI5IEMzMi4xNDI4NTcxLDkuMDE3MDg1MTQgMzEuODc0MjI4LDkuMjg1NzE0MjkgMzEuNTQyODU3MSw5LjI4NTcxNDI5IEwxOC40NTcxNDI5LDkuMjg1NzE0MjkgQzE4LjEyNTc3Miw5LjI4NTcxNDI5IDE3Ljg1NzE0MjksOS4wMTcwODUxNCAxNy44NTcxNDI5LDguNjg1NzE0MjkgTDE3Ljg1NzE0MjksNy43NDI4NTcxNCBDMTcuODU3MTQyOSw3LjQxMTQ4NjI5IDE4LjEyNTc3Miw3LjE0Mjg1NzE0IDE4LjQ1NzE0MjksNy4xNDI4NTcxNCBaIiBpZD0i55+p5b2iIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4wMDAwMDAsIDguMjE0Mjg2KSByb3RhdGUoNDcuMDAwMDAwKSB0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTguMjE0Mjg2KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjQ5Mjg1NzE0LDE0LjI4NTcxNDMgTDEyLjc5Mjg1NzEsMTQuMjg1NzE0MyBDMTMuMTI0MjI4LDE0LjI4NTcxNDMgMTMuMzkyODU3MSwxNC41NTQzNDM0IDEzLjM5Mjg1NzEsMTQuODg1NzE0MyBMMTMuMzkyODU3MSwxNS44Mjg1NzE0IEMxMy4zOTI4NTcxLDE2LjE1OTk0MjMgMTMuMTI0MjI4LDE2LjQyODU3MTQgMTIuNzkyODU3MSwxNi40Mjg1NzE0IEwxLjQ5Mjg1NzE0LDE2LjQyODU3MTQgQzEuMTYxNDg2MjksMTYuNDI4NTcxNCAwLjg5Mjg1NzE0MywxNi4xNTk5NDIzIDAuODkyODU3MTQzLDE1LjgyODU3MTQgTDAuODkyODU3MTQzLDE0Ljg4NTcxNDMgQzAuODkyODU3MTQzLDE0LjU1NDM0MzQgMS4xNjE0ODYyOSwxNC4yODU3MTQzIDEuNDkyODU3MTQsMTQuMjg1NzE0MyBaIiBpZD0i55+p5b2i5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjE0Mjg1NywgMTUuMzU3MTQzKSByb3RhdGUoNDcuMDAwMDAwKSB0cmFuc2xhdGUoLTcuMTQyODU3LCAtMTUuMzU3MTQzKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC45NTcxNDI5LDI2Ljc4NTcxNDMgTDM3Ljc5Mjg1NzEsMjYuNzg1NzE0MyBDMzguMTI0MjI4LDI2Ljc4NTcxNDMgMzguMzkyODU3MSwyNy4wNTQzNDM0IDM4LjM5Mjg1NzEsMjcuMzg1NzE0MyBMMzguMzkyODU3MSwyOC4zMjg1NzE0IEMzOC4zOTI4NTcxLDI4LjY1OTk0MjMgMzguMTI0MjI4LDI4LjkyODU3MTQgMzcuNzkyODU3MSwyOC45Mjg1NzE0IEwzMC45NTcxNDI5LDI4LjkyODU3MTQgQzMwLjYyNTc3MiwyOC45Mjg1NzE0IDMwLjM1NzE0MjksMjguNjU5OTQyMyAzMC4zNTcxNDI5LDI4LjMyODU3MTQgTDMwLjM1NzE0MjksMjcuMzg1NzE0MyBDMzAuMzU3MTQyOSwyNy4wNTQzNDM0IDMwLjYyNTc3MiwyNi43ODU3MTQzIDMwLjk1NzE0MjksMjYuNzg1NzE0MyBaIiBpZD0i55+p5b2i5aSH5Lu9LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjM3NTAwMCwgMjcuODU3MTQzKSByb3RhdGUoNDcuMDAwMDAwKSB0cmFuc2xhdGUoLTM0LjM3NTAwMCwgLTI3Ljg1NzE0MykgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGN4PSIxNy44NTcxNDI5IiBjeT0iMC44OTI4NTcxNDMiIHI9IjEiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTMiIGN4PSIwLjg5Mjg1NzE0MyIgY3k9IjguOTI4NTcxNDMiIHI9IjEiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTQiIGN4PSIyOS40NjQyODU3IiBjeT0iMjIuMzIxNDI4NiIgcj0iMSI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
const contractTypeGeneralStr = 'General Contract';
const contractTypeERC20Str = 'ERC20';
const contractTypeERC777Str = 'ERC777';
const contractTypeFcStr = 'FansCoin';
const contractTypeERC721Str = 'ERC721';
const contractTypeDEXStr = 'DEX';
export const contractTypes = {
  0: contractTypeGeneralStr,
  100: contractTypeERC20Str,
  200: contractTypeERC777Str,
  201: contractTypeFcStr,
  // 500: contractTypeERC721Str,
  // 1000: contractTypeDEXStr,
};
export const contractTypeGeneral = contractTypeGeneralStr;
export const contractTypeERC20 = contractTypeERC20Str;
export const contractTypeERC777 = contractTypeERC777Str;
export const contractTypeFc = contractTypeFcStr;
export const contractTypeERC721 = contractTypeERC721Str;
export const contractTypeDEX = contractTypeDEXStr;
