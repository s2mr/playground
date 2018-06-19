import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList';
import { fetchCategories } from '../actions/CategoryList';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    onLoad() {
        dispatch(fetchCategories())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)