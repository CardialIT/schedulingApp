import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 98,
    height: 98,
    borderRadius: 100,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  professionText: {
    fontSize: 14,
    fontWeight: '30',
    color: '#7A7A7A',
  },
  divider: {
    width: '98%',
    borderBottomWidth: 1,
    borderBottomColor: '#7A7A7A',
    marginHorizontal: 5,
    marginTop: 25,
    opacity: 0.1,
  },
  selectionTitleContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectionTitleText: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 10,
    fontWeight: 'bold',
  },
  monthNavigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 34,
  },
  navigationText: {
    fontSize: 20,
    color: '#000000',
    marginHorizontal: 20,
  },
  monthText: {
    fontSize: 16,
  },
  datesContainer: {
    marginLeft: 20,
  },
  dateItemContainer: {
    width: 63,
    height: 72,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    borderWidth: 1.5,
  },
  dateText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  dayOfWeekText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  timesContainer: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  timesTitleContainer: {
    alignItems: 'flex-start',
    margin: 10,
  },
  timesTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  timeItemContainer: {
    paddingHorizontal: 42,
    paddingTop: 13,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    borderWidth: 1.5,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 34,
  },
  button: {
    backgroundColor: '#DD3E7B',
    paddingVertical: 20,
    paddingHorizontal: 130,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
//ola.

export default styles;
