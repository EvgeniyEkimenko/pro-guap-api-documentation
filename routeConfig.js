 /*
  * routeConfig - объект конфигурации
  * Св-ва объекта:
  *     route - //url запроса
  *     component - имя компонента
  *     module - адрес папки, где лежит js, а так же шаблон компонента
  *     localData - какие-то доп. локальные данные (параметры для компонента)
  *     serverRequest - если необходим запрос на сервер для получения данных
  */
        
define(function() {
    
    var routeConfig = [
        {
            route:     ['/inside_s#library'],
            component: 'library',
            module:    'library/library',
            serverRequest: function(pageVM, params) {                
                return {
                    url: "/getstudentlibrary/" + pageVM.authorizedUser.user_id,
                    method: "GET",
                    data: {},
                    success: function() {

                    },
                 }
            }
        },        
        //просмотр профиля студента
        {
            route:     ['/inside_s', '/inside_s#sprofile', '/inside_s#sprofile/tab1'],
            component: 'viewProfileStudent',
            module:    'viewProfileStudent/viewProfileStudent',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    if (pageVM.authorizedUser.dataChanged()) {
                        return false;
                    }                    
                    return true;
                }
            },            
            localData: {
                tab: 1
            },            
            serverRequest: function(pageVM, params) {
                return {
                    url: "/getstudentprofile/" + pageVM.authorizedUser.user_id,
                    method: "GET",
                    data: {},
                    success: function() {
                        pageVM.authorizedUser.dataChanged(false);
                    }
                }
            }
        },
        {
            route:     ['/inside_s#sprofile/tab2'],
            component: 'viewProfileStudent',
            module:    'viewProfileStudent/viewProfileStudent',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    if (pageVM.authorizedUser.dataChanged()) {
                        return false;
                    }                    
                    return true;
                }
            },            
            localData: {
                tab: 2
            },            
            serverRequest: function(pageVM, params) {
                return {
                    url: "/getstudentprofile/" + pageVM.authorizedUser.user_id,
                    method: "GET",
                    data: {},
                    success: function() {
                        pageVM.authorizedUser.dataChanged(false);
                    }
                }
            }
        },   
        {
            route:     ['/inside_s#sprofile/tab3'],
            component: 'viewProfileStudent',
            module:    'viewProfileStudent/viewProfileStudent',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    if (pageVM.authorizedUser.dataChanged()) {
                        return false;
                    }
                    return true;
                }
            },            
            localData: {
                tab: 3
            },
            serverRequest: function(pageVM, params) {
                return {
                    url: "/getstudentprofile/" + pageVM.authorizedUser.user_id,
                    method: "GET",
                    data: {},
                    success: function() {
                        pageVM.authorizedUser.dataChanged(false);
                    }
                }
            }
        },
        {
            route:     ['/inside_s#sprofile/tab4'],
            component: 'viewProfileStudent',
            module:    'viewProfileStudent/viewProfileStudent',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    if (pageVM.authorizedUser.dataChanged()) {
                        return false;
                    }
                    return true;
                }
            },
            localData: {
                tab: 4
            },
            serverRequest: function(pageVM, params) {
                return {
                    url: "/getstudentprofile/" + pageVM.authorizedUser.user_id,
                    method: "GET",
                    data: {},
                    success: function() {
                        pageVM.authorizedUser.dataChanged(false);
                    }
                }
            }
        },
        {
            route:     ['/inside_s#sprofile/tab5/'],
            component: 'viewProfileStudent',
            module:    'viewProfileStudent/viewProfileStudent',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    if (pageVM.authorizedUser.dataChanged()) {
                        return false;
                    }
                    return true;
                }
            },
            localData: {
                tab: 5
            },
            serverRequest: function(pageVM, params) {
                return {
                    url: "/getstudentprofile/" + pageVM.authorizedUser.user_id,
                    method: "GET",
                    data: {},
                    success: function() {
                        pageVM.authorizedUser.dataChanged(false);
                    }
                }
            }
        },
        //Просмотр профиля преподавателя
        {
            route:     ['/inside_s#profile/:id', '/inside_s#profile/tab1/:id'],
            component: 'viewProfile',
            module:    'viewProfile/viewProfile',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    var cacheObj = JSON.parse(pageVM.cache['viewProfile']);
                    var cachedUserId = cacheObj.user.id; 
                    //если данные в кэше содержат пользователя, отличного от запрашиваемого
                    if (params.params.id != cachedUserId) {
                        return false;
                    }
                    return true;
                }
            },            
            localData: {
                tab: 1
            },
            serverRequest: function(pageVM, params) {    
                return {
                    url: "/getuserprofile/" + params.params.id,
                    method: "GET",
                    data: {},
                    success: function() {

                    }
                }
            }
        },
        {
            route:     ['/inside_s#profile/tab2/:id'],
            component: 'viewProfile',
            module:    'viewProfile/viewProfile',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    var cacheObj = JSON.parse(pageVM.cache['viewProfile']);
                    var cachedUserId = cacheObj.user.id;    
                    if (params.params.id != cachedUserId) {
                         return false;
                    }
                    return true;
                }
            },            
            localData: {
                tab: 2
            },
            serverRequest: function(pageVM, params) {                
                return {
                    url: "/getuserprofile/" + params.params.id,
                    method: "GET",
                    data: {},
                    success: function() {
                    }
                }
            }
        },
        {
            route:     ['/inside_s#profile/tab3/:id'],
            component: 'viewProfile',
            module:    'viewProfile/viewProfile',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    var cacheObj = JSON.parse(pageVM.cache['viewProfile']);
                    var cachedUserId = cacheObj.user.id;
                    if (params.params.id != cachedUserId) {
                        return false;
                    } 
                 
                    return true;
                }
            },            
            localData: {
                tab: 3
            },
            serverRequest: function(pageVM, params) {                
                return {
                    url: "/getuserprofile/" + params.params.id,
                    method: "GET",
                    data: {},
                    success: function() {

                    }
                }
            }
        },
        {
            route:     ['/inside_s#profile/tab4/:id'],
            component: 'viewProfile',
            module:    'viewProfile/viewProfile',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    var cacheObj = JSON.parse(pageVM.cache['viewProfile']);
                    var cachedUserId = cacheObj.user.id;
                    if (params.params.id != cachedUserId) {
                        return false;
                    } 
                 
                    return true;
                }
            },            
            localData: {
                tab: 4
            },
            serverRequest: function(pageVM, params) {                
                return {
                    url: "/getuserprofile/" + params.params.id,
                    method: "GET",
                    data: {},
                    success: function() {

                    }
                }
            }
        },
        {
            route:     ['/inside_s#profile/tab5/:id'],
            component: 'viewProfile',
            module:    'viewProfile/viewProfile',
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    var cacheObj = JSON.parse(pageVM.cache['viewProfile']);
                    var cachedUserId = cacheObj.user.id;
                    if (params.params.id != cachedUserId) {
                        return false;
                    } 
                 
                    return true;
                }
            },            
            localData: {
                tab: 5
            },
            serverRequest: function(pageVM, params) {                
                return {
                    url: "/getuserprofile/" + params.params.id,
                    method: "GET",
                    data: {},
                    success: function() {

                    }
                }
            }
        },
        {
            route:     ['/inside_s#materials'],
            component: 'materials',
            module:    'materials/materials',
            //cache: false,
            cache: {
                type: "full",
                cacheCondition: function() {
                    return true;
                }
            },
            serverRequest: function(pageVM, params) {
                return {
                    url: "/getstudentmaterialdictionaries/",
                    method: "POST",
                    data: {
                        'userid': pageVM.authorizedUser.user_id
                    }
                }
            }
        },        
        {
            route:     ['/inside_s#loader'],
            component: 'loader',
            module:    'loader/loader'
        },
        
        
        {
            route:     ['/inside_s#edit/main'],
            component: 'editProfile',
            module:    'editProfile/editProfile',            
            localData: {
                tab: 'editProfileMain'
            }
        },
        {
            route:     ['/inside_s#edit/pass'],
            component: 'editProfile',
            module:    'editProfile/editProfile',            
            localData: {
                tab: 'editProfilePass'
            }
        },
        {
            route:     ['/inside_s#edit/achievement'],
            component: 'editProfile',
            module:    'editProfile/editProfile',            
            localData: {
                tab: 'editProfileAchievements'
            }
        },
        {
            route:     ['/inside_s#edit/achievementNew'],
            component: 'editProfile',
            module:    'editProfile/editProfile',            
            localData: {
                tab: 'editProfileAchievementsNew'
            }
        },
        {
            route:     ['/inside_s#marks/pie'],
            component: 'studentMarks',
            module:    'studentMarks/studentMarks', 
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    return true;
                }
            },            
            localData: {
                tab: 'pie'
            }
        },
        {
            route:     ['/inside_s#marks/line'],
            component: 'studentMarks',
            module:    'studentMarks/studentMarks', 
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    return true;
                }
            },             
            localData: {
                tab: 'line'
            }
        },
        {
            route:     ['/inside_s#marks/pie/:sem'],
            component: 'studentMarks',
            module:    'studentMarks/studentMarks', 
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    return true;
                }
            },            
            localData: {
                tab: 'pie'
            }
        },
        {
            route:     ['/inside_s#marks/line/:sem'],
            component: 'studentMarks',
            module:    'studentMarks/studentMarks', 
            cache: {
                //Полное кэширование
                type: "full",
                //когда можно использовать данные из кэша
                cacheCondition: function(pageVM, params) {
                    return true;
                }
            },            
            localData: {
                tab: 'line'
            }
        },
        
        {
            route:     ['/inside_s#subjects'],
            component: 'subjects',
            module:    'subjects/subjects',
            //cache: false,
            cache: {
                type: "full",
                cacheCondition: function() {
                    return true;
                }
            },

            serverRequest: function(pageVM, params) {
                return {
                    url: "/getsubjectsdictionaries/",
                    method: "POST",
                    data: {
                        'tid' : pageVM.authorizedUser.tid,
                        'role': '1',
                        'year'          :  0,
                        'semester'      :  0,
                        'type'          :  0,
                        'controltype'   :  0,
                        'searchtext'    :  "",
                        'limit'         :  10,
                        'offset'        :  0 
                    }
                }
            }            
        },
        {
            route:     ['/inside_s#subjects/:id'],
            component: 'subject',
            module:    'subjects/subject',
            //cache: false,
            cache: {
                type: "full",
                cacheCondition: function() {
                    return true;
                }
            },
            serverRequest: function(pageVM, params) {
                return {
                    url: "/subjectItemStudent/",
                    method: "POST",
                    data: {
                        'id': params.params.id,
                        'eid': pageVM.authorizedUser.eid
                    }
                }
            }
        },        
        {
            route:     ['/inside_s#tasks'],
            component: 'tasks',
            module:    'tasks/tasks',
            //cache:     false,
            cache: {
                type: "full",
                cacheCondition: function() {
                    return true;
                }
            },
            serverRequest: function(pageVM, params) {
                return {
                    url: "/get-student-tasksdictionaries/",
                    method: "POST",
                    data: {
                        'iduser': pageVM.authorizedUser.user_id
                    }
                }
            }
        } ,
        {
            route:     ['/inside_s#tasks/:id'],
            component: 'task',
            module:    'tasks/task',
            cache: false,
//            cache: {
//                type: "full",
//                cacheCondition: function() {
//                    return true;
//                }
//            },
            serverRequest: function(pageVM, params) {
                return {
                    url: "/get-student-task/" + params.params.id,
                    method: "POST",
                    data: {
                        //'userid': pageVM.authorizedUser.user_id,
                        'task_id': params.params.id
                    }
                }
            }
        },
        {
            route:     ['/inside_s#questionnaire-of-student'],
            component: 'questionnaire',
            module:    'questionnaire/questionnaire',
            cache: false,
            serverRequest: {
                url: "/getQuestionnaire",
                method: "get",
                data: {
                }
            }            
        },
        {
            route:     ['/inside_s#reference'],
            component: 'reference',
            module:    'reference/reference',
            cache: false,
            serverRequest: function(pageVM, params) {
                return {
                    url: "/getReferenceDictionaries/",
                    method: "POST",
                    data: {
                    }
                }
            }
        },
        // {
        //     route:     ['/inside_s#inform'],
        //     component: 'information',
        //     module:    'information/information',
        //     cache: false,
        //     serverRequest: {
        //         url: "/getInformation/",
        //         method: "get",
        //         data: {
        //
        //         }
        //     }
        // },
        {
            route:     ['/inside_s#user-publications'],
            component: 'publications',
            module:    'publications/publications',
            localData: {
                tab: 'userPublications'
            }
        },
        {
            route:     ['/inside_s#all-publications'],
            component: 'publications',
            module:    'publications/publications',
            localData: {
                tab: 'allPublications'
            }
        },
    ];
    
    //компоненты без роутинга
    routeConfig.unroutedComponents = [
        //подкомпоненты для просмотра профиля Преподавателя
        {
            component: 'viewProfileEducation',
            module:    'viewProfile/viewProfileEducation'
        },
        {
            component: 'viewProfilePublication',
            module:    'viewProfile/viewProfilePublication'
        },
        {
            component: 'viewProfilePlot',
            module:    'viewProfile/viewProfilePlot'
        },
        
        //подкомпоненты для просмотра профиля Студента
        {
            component: 'viewProfileStudentEducation',
            module:    'viewProfileStudent/viewProfileStudentEducation'
        },
        {
            component: 'viewProfileStudentPublication',
            module:    'viewProfileStudent/viewProfileStudentPublication'
        },
        {
            component: 'viewProfileStudentPlot',
            module:    'viewProfileStudent/viewProfileStudentPlot'
        },
        
        //редактирование профиля
        {
            component: 'editProfileMain',
            module:    'editProfile/main/editProfileMain'
        },
        {
            component: 'editProfilePass',
            module:    'editProfile/pass/editProfilePass'
        },
        {
            component: 'editProfileAchievements',
            module:    'editProfile/achievements/editProfileAchievements'
        },
        {
            component: 'editProfileAchievementsNew',
            module:    'editProfile/achievements/editProfileAchievementsNew'
        },        
        {
            component: 'editAchievement',
            module:    'editProfile/achievements/editAchievement'
        },   
        {
            component: 'achievementDeleteDialog',
            module:    'editProfile/achievements/achievementDeleteDialog'
        },        
        {
            component: 'subjectsSearch',
            module:    'studentMarks/subjectsSearch'
        },
        {
            component: 'rowsubject',
            module:    'studentMarks/rowsubject'
        },
        {
            component: 'rowsubjects',
            module:    'subjects/rowsubject'
        },
        {
            component: 'subjectsChart',
            module:    'studentMarks/subjectsChart'
        },
        //subjectsChart
        {
            component: 'listReferences',
            module:    'reference/listReferences'
        },
        {
            component: 'userPublications',
            module:    'publications/student/publications'
        },
        {
            component: 'publicationDeleteDialog',
            module:    'publications/student/publicationDeleteDialog'
        },
        {
            component: 'userPublicationEdit',
            module:    'publications/student/userPublicationEdit'
        },
        {
            component: 'userPublicationView',
            module:    'publications/student/userPublicationView'
        },
        {
            component: 'allPublications',
            module:    'publications/all/publications'
        },
        {
            component: 'allPublicationView',
            module:    'publications/all/allPublicationView'
        },
    ];
    
    
    routeConfig.freezeComponents = {
        studentMarks: {
            //freezeCallback: false
            freezeCallback: function(pageVM, data, olddata) {
                //просто установим новое значение для семестра
                var sem = 0;
                if (data.params && data.params.sem) {
                    sem = +data.params.sem;
                }
                pageVM.componentsPages.studentMarks.selectedSemester(sem);

            },
            freezeCondition: function(data, olddata) {
                
                if (!olddata) {
                    return false;
                }
                
                if(data.localData.tab != olddata.localData.tab) {
                    return false;
                }
                
                return true;
            }
        }
    };
    
    return routeConfig;
    
});