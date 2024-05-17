import clsx from "clsx";
import Progress from "./Progress";
import Card from "@/common/components/elements/Card";

interface ItemProps {
    name: string;
    hours: number;
    minutes: number;
}

interface CodingActiveListProps {
    data?: {
        languages?: ItemProps[];
        categories?: ItemProps[];
    };
}
const sumTotalFromArray = <T extends { hours: number; minutes: number }>(
    data: T[],
    key: keyof T,
) => {
    return (
        data.reduce(
            (previousValue, currentValue) =>
                previousValue + (currentValue[key] as number),
            0,
        ) ?? 0
    );
};
const Active = ({ data }: CodingActiveListProps) => {
    const getLanguagesTotalHours = sumTotalFromArray<ItemProps>(
        data?.languages || [],
        'hours',
    );
    const getLanguagesTotalMinutes = sumTotalFromArray<ItemProps>(
        data?.languages || [],
        'minutes',
    );
    const getLanguagesTotalTimeDisplay = `${Math.floor((getLanguagesTotalMinutes % 3600) / 60) + getLanguagesTotalHours
        } hrs ${getLanguagesTotalMinutes} mins`;

    const getEditorTotalHours = sumTotalFromArray<ItemProps>(
        data?.categories || [],
        'hours',
    );
    const getEditorTotalMinutes = sumTotalFromArray<ItemProps>(
        data?.categories || [],
        'minutes',
    );
    const getEditorTotalTimeDisplay = `${Math.floor((getEditorTotalMinutes % 3600) / 60) + getEditorTotalHours
        } hrs ${getEditorTotalMinutes} mins`;

    const actives = [
        {
            title: 'Languages',
            total: getLanguagesTotalTimeDisplay,
            data: data?.languages,
            styles: {
                bg: 'bg-gradient-to-r from-amber-400 to-rose-600',
            },
        },
        {
            title: 'Categories',
            total: getEditorTotalTimeDisplay,
            data: data?.categories,
            styles: {
                bg: 'bg-gradient-to-r from-blue-400 to-purple-600',
            },
        },
    ];

    if (!data) {
        return null;
    }
    return (
        <div className="mt-5">
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4">
                {actives.map((item) => (
                    <div key={item?.title}>
                        <h1 className="text-base font-medium mb-2">{item?.title}</h1>
                        <Card>
                            <ul className='flex flex-col gap-1 px-4 py-3'>
                                {item?.data?.map((subItem) => (
                                    <li key={subItem?.name}>
                                        <Progress data={subItem} className={item?.styles?.bg} />
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Active