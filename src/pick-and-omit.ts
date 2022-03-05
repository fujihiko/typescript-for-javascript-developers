export{};

type DetaildProfile = {
    name: string;
    height: number;
    weight: number;
}

type SimpleProfile = Pick<DetaildProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetaildProfile, 'height'>;