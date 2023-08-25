import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Line,
  Svg,
} from "@react-pdf/renderer";

function CVTemp1() {
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
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "29px",
                  letterSpacing: "5px",
                  paddingBottom: "10px",
                }}
              >
                ESTELLE DARCY
              </Text>
              <Text
                style={{
                  fontSize: "12",
                  letterSpacing: "2px",
                  paddingBottom: "10px",
                }}
              >
                SOCIAL MEDIA MANAGER
              </Text>
              <Text style={{ fontSize: "9px", letterSpacing: "1px" }}>
                I am an experienced social media manager seeking a full-time
                position in the field of social media and marketing
                communications, where I can apply my knowledge and skills for
                continuous improvement.
              </Text>
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
                  fontSize: "10px",
                  letterSpacing: "1px",
                }}
              >
                SKILLS
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  • Photo editing and digital illustration software
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  • Social media suites & management software
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  • Tracking & analytics tools
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  • Word processors
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
                  fontSize: "10px",
                  letterSpacing: "1px",
                }}
              >
                EDUCATION
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    paddingBottom: "10px",
                  }}
                >
                  COMMUNICATIONS INTERN
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Bachelor of arts, major in communication
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  University of dundee | 2019 - 2022
                </Text>
                <Text
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  SOCIAL MEDIA PRODUCER
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Course in Digital Marketing
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  University of Mac Lane and Knights| 2022 - 2024
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
                  fontSize: "10px",
                  letterSpacing: "1px",
                }}
              >
                EXPERIENCE
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    paddingBottom: "10px",
                  }}
                >
                  SOCIAL MEDIA PRODUCER
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "10px",
                  }}
                >
                  Pixelpoint Hive 2024-2026
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Managed social media accounts.
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Created social media graphics for daily posting.
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Increased social media following and clicks by 200%
                </Text>

                <Text
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  SOCIAL MEDIA PRODUCER
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "10px",
                  }}
                >
                  Pixelpoint Hive 2024-2026
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Organizes all social media posts for the editorial department
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Approves all content to be posted on social media
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  Engages with readers and clients online
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
                  fontSize: "10px",
                  letterSpacing: "1px",
                }}
              >
                CONTACT
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  hello@reallygreatsite.com
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "10px",
                  }}
                >
                  www.reallygreatsite.com
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  @reallygreatsite
                </Text>
                <Text
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    paddingBottom: "5px",
                  }}
                >
                  123, Anywhere St., Any City
                </Text>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default CVTemp1;
