;"use strict";
;(function($){

    /**
     * 检测IE版本
     * @return {Number}
     * @return 0				非IE浏览器
     * @return 6-11			IE6 - IE11
     * @return undefined		可能是IE5及以下 ...
     */
    $.isIE = function(){
        var version = 0;

        if( navigator.userAgent.toLowerCase().indexOf( 'msie 6' )>=0 ) {
            version = 6;
        } else if( navigator.userAgent.toLowerCase().indexOf( 'msie 7' )>=0 ) {
            version = 7;
        } else if( navigator.userAgent.toLowerCase().indexOf( 'msie 8' )>=0 ) {
            version = 8;
        } else if( navigator.userAgent.toLowerCase().indexOf( 'msie 9' )>=0 ) {
            version = 9;
        } else if( navigator.userAgent.toLowerCase().indexOf( 'msie 10' )>=0 ) {
            version = 10;
        } else if( navigator.userAgent.toLowerCase().indexOf( 'rv:11' )>=0 ) {
            version = 11;
        }

        return version;
    }();


    /**
     * 兼容低级浏览器的placeholder属性
     * @return {[type]}         [被选取的jQuery对象]
     * Use :
     $('[placeholder]').placeholder();
     */
    $.fn.placeholder = function( settings ){
        var settings = typeof settings=='undefined' ? {} : settings;

        //default options
        var opts = {
            //是否使用内置样式
            useDefaultStyle : true,
            //placeholder文字css类名
            placeClassName : 'placeholder',
            //input父类名
            parentClassName : 'placeholder-parent',
            //input父类CSS
            parentStyle : 'position:relative;display:inline-block;overflow:hidden;',
            //placehodler元素CSS
            placeStyle : 'position:absolute;z-index:2;top:50%;left:0;width:100%;margin-top:-5px;padding:0;box-sizing:border-box;text-align:left;color:#999;line-height:10px;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
        };

        //merge
        $.extend( opts, settings );

        //Do'nt use default style
        if( !opts.useDefaultStyle ) {
            opts.parentStyle = '', opts.placeStyle = '';
        }

        if( $.isIE!=0 && $.isIE<=9 ) {
            $(this).each(function( index, ele ){
                //wrap it up
                $(ele).wrap( '<span class="'+opts.parentClassName+'" style="'+opts.parentStyle+'"></span>' );
                $(ele).after( '<span class="'+opts.placeClassName+'" style="'+opts.placeStyle+'">'+$(ele).attr('placeholder')+'</span>' );
                //margin and padding
                if( opts.useDefaultStyle ) {
                    $(ele).css('margin','0').parent().css('margin', $(ele).css('margin-top')+' '+$(ele).css('margin-right')+' '+$(ele).css('margin-bottom')+' '+$(ele).css('margin-left'));
                    $(ele).parent().find('.'+opts.placeClassName).css('padding', '0 '+$(ele).css('padding-right')+' 0 '+$(ele).css('padding-left'));
                    if( $(ele).get(0).tagName.toLowerCase()=="textarea" ) {
                        $(ele).parent().find('.'+opts.placeClassName).css('top','0').css('margin-top',$(ele).css('padding-top'));
                    }
                }
                //block
                if( opts.useDefaultStyle ) {
                    $(ele).parent().css('display',$(ele).css('display'));
                }
                //init placehoder state
                if( $(ele).val().length>0 ) placeHidden();
                //events
                $(ele).on('focus',placeHidden);
                $(ele).on('blur',function(){
                    if( $(ele).val().length<=0 ) {
                        $(ele).parent().find('.'+opts.placeClassName).show(0);
                    }
                });
                $(ele).parent().find('.'+opts.placeClassName).on('mousedown',function(){
                    if( !$(ele).prop('disabled') ) {
                        $(this).hide(0).parent().find('[placeholder]').focus();
                    }
                });
                //placeholder hidden
                function placeHidden() {
                    $(ele).parent().find('.'+opts.placeClassName).hide(0);
                }
            });
        }

        return $(this);
    };

})(jQuery);