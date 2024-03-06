import cn from 'classnames';

export default function CustomButton(props: any) {

    return (
            <button className={cn(`
            bg-transparent
            text-buttonColor-hover
            p-3 rounded-xl text-center 
            border-buttonColor-hover border-2 
            hover:bg-buttonColor-hover
            hover:text-buttonColor-text
            `, props?.className)}
            >
                <span className="">Read More</span>
            </button>
        );

}