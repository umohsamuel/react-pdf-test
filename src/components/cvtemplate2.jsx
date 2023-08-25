import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Line,
  Svg,
  Path,
  Circle,
} from "@react-pdf/renderer";

function CVTemp2() {
  const styles = StyleSheet.create({
    page: { padding: 60 },
    viewer: {
      width: "55vw",
      height: "95vh",
    },

    section: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      paddingBottom: "10px",
    },
    section2: {
      display: "flex",
      flexDirection: "row",
      //   flexWrap: "wrap",
      paddingBottom: "10px",
      paddingTop: "10px",
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page style={styles.page} size="A4">
            <View
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "15px",
                width: "110%",
                marginTop: "20px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#353535",
                  height: "100px",
                  width: "62.5%",
                  //   paddingHorizontal: "20px",
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    flexWrap: "nowrap",
                    fontWeight: "extrabold",
                    letterSpacing: "1px",
                  }}
                >
                  MORGAN MAXWELL
                </Text>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "11px",
                    flexWrap: "nowrap",
                    fontWeight: "extrabold",
                    letterSpacing: "1px",
                    marginTop: "5px",
                    marginLeft: "-100px",
                  }}
                >
                  MARKETING MANAGER
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  gap: "5px",
                  width: "30%",
                  //   marginLeft: "10px",
                }}
              >
                <View
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <Svg width="30" height="30" viewBox="0 0 50 50" fill="none">
                    <Circle
                      cx="25"
                      cy="25"
                      r="23.5"
                      fill="none"
                      stroke="black"
                      stroke-width="3"
                    ></Circle>

                    <Path
                      d="M37.0606 30.458L32.8187 29.9736C32.3199 29.9151 31.8144
                    29.9703 31.34 30.1352C30.8656 30.3 30.4348 30.5703 30.0799
                    30.9256L27.007 33.9984C22.2661 31.5873 18.4127 27.7338
                    16.0015 22.9929L19.0911 19.9033C19.8092 19.1852 20.1599
                    18.1832 20.043 17.1645L19.5587 12.956C19.464 12.1413 19.073
                    11.3899 18.4602 10.8448C17.8474 10.2997 17.0555 9.99903
                    16.2353 10H13.3462C11.4591 10 9.88923 11.5698 10.0061
                    13.457C10.8912 27.7191 22.2975 39.1087 36.5429 39.9939C38.43
                    40.1108 39.9998 38.5409 39.9998 36.6538V33.7646C40.0165
                    32.0779 38.7473 30.6584 37.0606 30.458Z"
                      fill="black"
                    ></Path>
                  </Svg>
                  <Text style={{ fontSize: "12px" }}>+123-456-7890</Text>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <Svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Circle
                      cx="25"
                      cy="25"
                      r="23.5"
                      fill="none"
                      stroke="black"
                      stroke-width="3"
                    ></Circle>
                    <Path
                      d="M13 38C12.175 38 11.4685 37.6815 10.8805 37.0445C10.2925 36.4075 9.999 35.6427 10 34.75V15.25C10 14.3563 10.294 13.5909 10.882 12.9539C11.47 12.3169 12.176 11.9989 13 12H37C37.825 12 38.5315 12.3185 39.1195 12.9555C39.7075 13.5925 40.001 14.3573 40 15.25V34.75C40 35.6437 39.706 36.4091 39.118 37.0461C38.53 37.6831 37.824 38.0011 37 38H13ZM25 26.625L37 18.5V15.25L25 23.375L13 15.25V18.5L25 26.625Z"
                      fill="black"
                    ></Path>
                  </Svg>
                  <Text style={{ fontSize: "12px" }}>
                    hello@reallygreatsite.com
                  </Text>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <Svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Circle
                      cx="25"
                      cy="25"
                      r="23.5"
                      fill="#353535"
                      stroke="black"
                      stroke-width="3"
                    />
                    <Path
                      d="M25 24.25C23.8634 24.25 22.7733 23.8549 21.9695 23.1517C21.1658 22.4484 20.7143 21.4946 20.7143 20.5C20.7143 19.5054 21.1658 18.5516 21.9695 17.8483C22.7733 17.1451 23.8634 16.75 25 16.75C26.1366 16.75 27.2267 17.1451 28.0305 17.8483C28.8342 18.5516 29.2857 19.5054 29.2857 20.5C29.2857 20.9925 29.1749 21.4801 28.9595 21.9351C28.7441 22.39 28.4284 22.8034 28.0305 23.1517C27.6325 23.4999 27.16 23.7761 26.6401 23.9645C26.1201 24.153 25.5628 24.25 25 24.25ZM25 10C21.8174 10 18.7652 11.1062 16.5147 13.0754C14.2643 15.0445 13 17.7152 13 20.5C13 28.375 25 40 25 40C25 40 37 28.375 37 20.5C37 17.7152 35.7357 15.0445 33.4853 13.0754C31.2348 11.1062 28.1826 10 25 10Z"
                      fill="white"
                    />
                  </Svg>
                  <Text style={{ fontSize: "12px" }}>
                    123 Anywhere St., Any City
                  </Text>
                </View>
              </View>

              <View></View>
            </View>

            <Svg
              height="10"
              width="500"
              style={{
                marginTop: "75px",
              }}
            >
              <Line
                x1="0"
                y1="0"
                x2="475"
                y2="0"
                strokeWidth={2}
                stroke="#000000"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </Svg>

            <View style={styles.section2}>
              <Text
                style={{
                  width: "30vw",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  color: "000000",
                  fontWeight: "extrabold",
                }}
              >
                About Me
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                    width: "50vw",
                    marginTop: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet, bonorum pertinax patrioque et pri,
                  ea pri audire molestie ponderum, ei eripuit habemus
                  delicatissimi eum. Ius te feugait theophrastus, nec quaestio
                  intellegat at. Pro inermis quaestio splendide id, meliore
                  ancillae sea et. Et mea tale consul, an aeque alienum
                  delicatissimi nec.
                </Text>
              </View>
            </View>

            <Svg height="10" width="500">
              <Line
                x1="0"
                y1="0"
                x2="475"
                y2="0"
                strokeWidth={2}
                stroke="#000000"
              />
            </Svg>

            <View style={styles.section2}>
              <Text
                style={{
                  width: "30vw",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  color: "000000",
                  fontWeight: "extrabold",
                }}
              >
                Experience
              </Text>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1px",
                      paddingBottom: "10px",
                      color: "000000",
                      fontWeight: "extrabold",
                      width: "50vw",
                      marginTop: "10px",
                    }}
                  >
                    Company Name 2017 - 2020
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1px",
                      paddingBottom: "5px",
                    }}
                  >
                    Job Position
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1px",
                      paddingBottom: "5px",
                      width: "50vw",
                      marginTop: "5px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                  </Text>
                </View>

                <View style={{ marginTop: "5px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1px",
                      paddingBottom: "10px",
                      color: "000000",
                      fontWeight: "extrabold",
                      width: "50vw",
                      marginTop: "10px",
                    }}
                  >
                    Company Name 2017 - 2020
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1px",
                      paddingBottom: "5px",
                    }}
                  >
                    Job Position
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1px",
                      paddingBottom: "5px",
                      width: "50vw",
                      marginTop: "5px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                  </Text>
                </View>
              </View>
            </View>

            <Svg height="10" width="500">
              <Line
                x1="0"
                y1="0"
                x2="475"
                y2="0"
                strokeWidth={2}
                stroke="#000000"
              />
            </Svg>

            <View style={styles.section2}>
              <Text
                style={{
                  width: "30vw",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  color: "000000",
                  fontWeight: "extrabold",
                }}
              >
                Education
              </Text>

              <View
                style={{
                  marginTop: "10px",
                  width: "50vw",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  {/* div for left  */}
                  <View
                    style={{
                      width: "15vw",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "extrabold",
                      }}
                    >
                      2015
                    </Text>

                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "normal",
                      }}
                    >
                      University Name
                    </Text>

                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "extrabold",
                      }}
                    >
                      Your Degree
                    </Text>
                  </View>

                  {/* div for right  */}
                  <View
                    style={{
                      width: "30vw",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "5px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "15px",
                  }}
                >
                  {/* div for left  */}
                  <View
                    style={{
                      width: "15vw",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "extrabold",
                      }}
                    >
                      2015
                    </Text>

                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "normal",
                      }}
                    >
                      University Name
                    </Text>

                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "extrabold",
                      }}
                    >
                      Your Degree
                    </Text>
                  </View>

                  {/* div for right  */}
                  <View
                    style={{
                      width: "30vw",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "5px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "15px",
                  }}
                >
                  {/* div for left  */}
                  <View
                    style={{
                      width: "15vw",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "extrabold",
                      }}
                    >
                      2015
                    </Text>

                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "normal",
                      }}
                    >
                      University Name
                    </Text>

                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "10px",
                        color: "000000",
                        fontWeight: "extrabold",
                      }}
                    >
                      Your Degree
                    </Text>
                  </View>

                  {/* div for right  */}
                  <View
                    style={{
                      width: "30vw",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px",
                        paddingBottom: "5px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default CVTemp2;
