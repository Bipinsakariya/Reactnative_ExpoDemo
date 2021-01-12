import React,{Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getJournalData } from '../action/Journal';
import { globleStyle } from '../globleStyle';
import Loader from '../component/Loader';
import Journal from '../reducers/Journal';

class Home extends Component{
    state={
        data:[],
        loading:false,
        page: 1,
    }
    async componentDidMount(){
        this.props.getJournalData(this.state.page,(data)=>{
            this.setState({
                data: data.data
            })
        })
    }

    LoadMoreRandomData() {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.props.getJournalData(this.state.page,(data)=>{
                this.setState({
                    data: this.state.page === 1 ? data.data : [...this.state.data, ...data.data]
                })
            })
        })
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={globleStyle.headerStyle}>
                    <Text style={globleStyle.headerTxt}>Home Screen</Text>
                </View>
                {/* <FlatList
                    contentContainerStyle={{paddingTop:'1%'}}
                    data={this.state.data}
                    renderItem={({ item, index }) =>
                        <View style={globleStyle.listView}>
                            <Text style={globleStyle.listTxt}>{`${index+1}.`}</Text>
                            <Text style={globleStyle.listTxt}>{item.title}</Text>
                        </View>
                    }
                    keyExtractor={(item) => item.id+item.slug}
                    onEndReachedThreshold={0.3}
                    onEndReached={() => this.LoadMoreRandomData()}
                />
                <Loader show={this.props.Journal.loading}/> */}
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getJournalData: (page, callback) => dispatch(getJournalData(page, callback))
    }
};

const mapStateToProps = (state) => ({
    Journal: state.Journal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);