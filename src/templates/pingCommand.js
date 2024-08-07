module.exports = {
  blocks: {
    languageVersion: 0,
    blocks: [
      {
        type: "main_token",
        id: "TKD7E0f}oJtU-hAT}@D`",
        x: 18,
        y: 18,
        inputs: {
          token: {
            block: {
              type: "main_env",
              id: ":MbcY}1{DUHMEC,p0)*B",
              inputs: {
                value: {
                  block: {
                    type: "text",
                    id: "ofzorJH/]psnD/+;iiO=",
                    fields: { TEXT: "token" },
                  },
                },
              },
            },
          },
        },
      },
      {
        type: "main_ready",
        id: "Y/fI5+0p-df[t^hBZv;9",
        x: 18,
        y: 123,
        inputs: {
          event: {
            block: {
              type: "slash_createcontainer",
              id: "H/6u/mQRomi|^zyC-wE/",
              inputs: {
                commands: {
                  block: {
                    type: "slash_create",
                    id: "ys99!+7^VN#Pap:})H*X",
                    inputs: {
                      name: {
                        shadow: {
                          type: "text",
                          id: "#3=[,lc,kjl*Q[H2BFci",
                          fields: { TEXT: "" },
                        },
                        block: {
                          type: "text",
                          id: "`rRHFd9G*bY].mKhsh6$",
                          fields: { TEXT: "ping" },
                        },
                      },
                      dsc: {
                        shadow: {
                          type: "text",
                          id: "$K%;g@H|#hV|IGo@sEGe",
                          fields: { TEXT: "" },
                        },
                        block: {
                          type: "text",
                          id: ",!;{v!(s)~/PU*`h|9oc",
                          fields: {
                            TEXT: "Replies with the bot's current ping",
                          },
                        },
                      },
                      nsfw: {
                        shadow: {
                          type: "logic_boolean",
                          id: "n;r}bq.E(FM8M@?sR?MK",
                          fields: { BOOL: "FALSE" },
                        },
                      },
                      dm: {
                        shadow: {
                          type: "logic_boolean",
                          id: "ev59[82wB,{BdDqkOfhD",
                          fields: { BOOL: "TRUE" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        type: "slash_received",
        id: "r+0qs6DalgS1B#]]cfPg",
        x: 18,
        y: 683,
        inputs: {
          event: {
            block: {
              type: "controls_if",
              id: "T3!?d~gMpsk_}kohLf?-",
              inputs: {
                IF0: {
                  block: {
                    type: "logic_compare",
                    id: "i]b4|!kZOoTpxh.4.x+t",
                    fields: { OP: "EQ" },
                    inputs: {
                      A: {
                        block: {
                          type: "slash_name",
                          id: "?1{zP]k_|)i4)/e`9Q!O",
                        },
                      },
                      B: {
                        block: {
                          type: "text",
                          id: "gFSm1me#+zKAWPVr:Dcz",
                          fields: { TEXT: "ping" },
                        },
                      },
                    },
                  },
                },
                DO0: {
                  block: {
                    type: "embed_create",
                    id: "X:oYLN_J[NIKg;)PGl~E",
                    fields: { name: "pingEmbed" },
                    inputs: {
                      config: {
                        block: {
                          type: "embed_settitle",
                          id: "_6A;z5*)_NzkiKc^GI8V",
                          inputs: {
                            value: {
                              block: {
                                type: "text",
                                id: "s3eiBJD~=cM@COZwj%.U",
                                fields: { TEXT: "🏓 Pong! 🏓" },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: "embed_setcolor",
                              id: "NN~kJB@Ny3PSz5_.]Txk",
                              inputs: {
                                value: {
                                  block: {
                                    type: "colour_random",
                                    id: "p5-}-q=tdOF75tlXKQAr",
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: "embed_setdsc",
                                  id: "[pU])bOUE-J{6O~8RUI7",
                                  inputs: {
                                    value: {
                                      block: {
                                        type: "text_join",
                                        id: "NT9~.zKsuu{?!NKBC)w4",
                                        extraState: { itemCount: 2 },
                                        inputs: {
                                          ADD0: {
                                            block: {
                                              type: "text",
                                              id: "D[muFFREDl~U9+EhwO@x",
                                              fields: {
                                                TEXT: "Current ping: ",
                                              },
                                            },
                                          },
                                          ADD1: {
                                            block: {
                                              type: "main_ping",
                                              id: "(?frSqLm^l1|u9XftL))",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    next: {
                      block: {
                        type: "slash_reply",
                        id: "dw-fH5WMK3mDl/#e/^3P",
                        inputs: {
                          embeds: {
                            block: {
                              type: "text",
                              id: "ygMsQ|usj)cJmB)j{B[*",
                              fields: { TEXT: "pingEmbed" },
                            },
                          },
                          ephemeral: {
                            block: {
                              type: "logic_boolean",
                              id: "u$TtQyc]z0La*Rui^A{$",
                              fields: { BOOL: "FALSE" },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    ],
  },
  backpack: [],
};
